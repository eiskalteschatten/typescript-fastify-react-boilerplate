import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserRegistration, passwordRegex } from '@tfrb/shared';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearAccountError, register as registerUser } from '@/store/entities/account';
import usePageTitle from '@/lib/usePageTitle';
import Button from '@/components/Button';
import Input from '@/components/Input';
import LoginRegistration from '@/layouts/LoginRegistration';

interface FieldValues extends UserRegistration {
  confirmPassword: string;
}

const Register: React.FC = () => {
  const { t } = useTranslation(['account']);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.account);
  const navigate = useNavigate();
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = values => dispatch(registerUser(values)).then(() => navigate('/')).catch(console.error);

  usePageTitle(t('account:register'));

  useEffect(() => {
    dispatch(clearAccountError());
  }, []);

  return (
    <LoginRegistration>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='email'
          label={t('account:emailAddress')}
          required
          fullWidth
          {...register('email', { required: true })}
        />

        <Input
          type='text'
          label={t('account:firstName')}
          required
          fullWidth
          {...register('firstName', { required: true })}
        />

        <Input
          type='text'
          label={t('account:lastName')}
          required
          fullWidth
          {...register('lastName', { required: true })}
        />

        <Input
          type='password'
          label={t('account:password')}
          error={errors.password?.message}
          required
          fullWidth
          {...register('password', {
            required: true,
            validate: {
              matchesSchema: value => passwordRegex.test(value) || t('account:passwordSchemaInvalid'),
            },
          })}
        />

        <Input
          type='password'
          label={t('account:confirmPassword')}
          error={errors.confirmPassword?.message}
          required
          fullWidth
          {...register('confirmPassword', {
            required: true,
            validate: {
              passwordsEqual: value => value === getValues().password || t('account:passwordsDontMatch'),
              matchesSchema: value => passwordRegex.test(value) || t('account:passwordSchemaInvalid'),
            },
          })}
        />

        <Button type='submit' primary showLoader={isLoading}>{t('account:register')}</Button>
      </form>
    </LoginRegistration>
  );
};

export default Register;
