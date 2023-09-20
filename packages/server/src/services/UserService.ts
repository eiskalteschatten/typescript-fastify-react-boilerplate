import config from 'config';
import jwt from 'jsonwebtoken';
import sequelize from 'sequelize';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import type { ChangePasswordData, SerializedUser, UserLoginReply, UserUpdate } from '@tfrb/shared';
import { passwordRegex } from '@tfrb/shared';

import User from '~/db/models/User';
import redisClient from '~/db/redis';
import logger from '~/lib/logger';
import { HttpError } from '~/lib/errors';
import { JwtPayload } from '~/auth/interfaces';

type TokenType = 'access' | 'refresh' | 'temp';
type TokenSuffixes = { [key in TokenType]: string; };

const tokenSuffixes: TokenSuffixes = {
  access: '-access-token',
  refresh: '-refresh-token',
  temp: '-temp-token',
};

export default class UserService {
  user: User;
  private readonly saltRounds = 12;

  async init(id: number): Promise<void> {
    this.user = await User.findByPk(id);
  }

  async register(registrationData: User): Promise<User> {
    const userExists = await this.checkIfUserExists(registrationData.email);

    if (userExists) {
      throw new HttpError('A user with this email address already exists!', 409);
    }

    if (!registrationData.password.match(passwordRegex)) {
      throw new HttpError('The password does not match the schema!', 400);
    }

    const hash = await bcrypt.hash(registrationData.password, this.saltRounds);
    this.user = await User.create({
      ...registrationData,
      password: hash,
    });

    return this.user;
  }

  async update(userId: number, updateData: UserUpdate): Promise<User> {
    this.user = await User.findByPk(userId);

    if (this.user.email !== updateData.email) {
      const userExists = await this.checkIfUserExists(updateData.email);

      if (userExists) {
        throw new HttpError('A user with this email address already exists!', 409);
      }
    }

    this.user = await this.user.update(updateData);

    return this.user;
  }

  async changePassword(userId: number, passwordData: ChangePasswordData): Promise<void> {
    this.user = await User.findByPk(userId);
    const currentPasswordIsValid = await this.validatePassword(passwordData.currentPassword);

    if (!currentPasswordIsValid) {
      throw new HttpError('The current password you entered is incorrect!', 403);
    }

    const hash = await bcrypt.hash(passwordData.password, this.saltRounds);
    await this.user.update({ password: hash });
  }

  private async checkIfUserExists(email: string): Promise<boolean> {
    const existingUser = await User.findOne({
      where: sequelize.where(
        sequelize.fn('lower', sequelize.col('User.email')),
        email.toLowerCase()
      ),
    });

    return !!existingUser;
  }

  serializeUser(): SerializedUser {
    return {
      id: this.user.id,
      email: this.user.email,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
    };
  }

  async login(email: string, password: string): Promise<UserLoginReply | undefined> {
    this.user = await User.findOne({ where: { email } });
    const passwordIsValid = await this.validatePassword(password);

    if (!this.user || !passwordIsValid) {
      throw new HttpError('Invalid email or password!', 401);
    }

    const accessToken = await UserService.generateJwt(this.user.id);
    const refreshToken = await UserService.generateRefreshToken(this.user.id);

    return {
      user: this.serializeUser(),
      accessToken,
      refreshToken,
    };
  }

  private async validatePassword(password: string): Promise<boolean> {
    if (!this.user) {
      return false;
    }

    const isValid = await bcrypt.compare(password, this.user.password);
    return isValid;
  }

  static async logout(id: number): Promise<void> {
    await Promise.all(Object.values(tokenSuffixes).map(suffix => redisClient.del(`${id}${suffix}`)));
  }

  static async generateToken(id: number, ttl: number, secret: string): Promise<string> {
    return jwt.sign({
      id,
      uuid: uuidv4(),
    } as JwtPayload,
    secret,
    {
      expiresIn: `${ttl}s`,
    });
  }

  static async generateJwt(id: number): Promise<string> {
    await redisClient.del(`${id}${tokenSuffixes.access}`);

    const ttl = config.get<number>('jwt.ttl');
    const secret = config.get<string>('jwt.secret');
    const token = await UserService.generateToken(id, ttl, secret);
    await UserService.saveJwtToRedis(id, 'access', token);
    return token;
  }

  static async generateRefreshToken(id: number): Promise<string> {
    await redisClient.del(`${id}${tokenSuffixes.refresh}`);

    const ttl = config.get<number>('jwt.refreshToken.ttl');
    const secret = config.get<string>('jwt.refreshToken.secret');
    const token = await UserService.generateToken(id, ttl, secret);
    await UserService.saveJwtToRedis(id, 'refresh', token);
    return token;
  }

  static async generateTempJwt(id: number): Promise<string> {
    await redisClient.del(`${id}${tokenSuffixes.temp}`);

    const ttl = config.get<number>('jwt.tempToken.ttl');
    const secret = config.get<string>('jwt.tempToken.secret');
    const token = await UserService.generateToken(id, ttl, secret);
    await UserService.saveJwtToRedis(id, 'temp', token);
    return token;
  }

  static async saveJwtToRedis(id: number, type: TokenType, token: string): Promise<void> {
    await redisClient.set(`${id}${tokenSuffixes[type]}`, token);
  }

  static async userTokenIsValid(payload: JwtPayload, type: TokenType = 'access'): Promise<User | undefined> {
    try {
      const token = await redisClient.get(`${payload.id}${tokenSuffixes[type]}`);

      if (token) {
        let secret: string;

        switch (type) {
          case 'access':
          default:
            secret = config.get<string>('jwt.secret');
            break;
          case 'refresh':
            secret = config.get<string>('jwt.refreshToken.secret');
            break;
          case 'temp':
            secret = config.get<string>('jwt.tempToken.secret');
            break;
        }

        const decodedToken = jwt.verify(token, secret) as JwtPayload;

        if (decodedToken && decodedToken.uuid === payload.uuid) {
          const user = await User.findByPk(payload.id);
          return user;
        }
      }
    }
    catch (error) {
      logger.error(error);
    }
  }
}
