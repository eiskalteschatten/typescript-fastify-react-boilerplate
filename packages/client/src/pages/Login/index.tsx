import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { LoginData, clearAccountError, login } from 'store/entities/account';
import usePageTitle from 'lib/usePageTitle';
import Input from 'components/Input';
import Button from 'components/Button';
import LoginRegistration from 'layouts/LoginRegistration';

const Login: React.FC = () => {
  const { t } = useTranslation(['account']);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.account);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginData>();
  const onSubmit: SubmitHandler<LoginData> = values => dispatch(login(values)).then(() => navigate('/')).catch(console.error);

  usePageTitle(t('account:login'));

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
          type='password'
          label={t('account:password')}
          required
          fullWidth
          {...register('password', { required: true })}
        />

        <Button type='submit' primary showLoader={isLoading}>{t('account:logIn')}</Button>
      </form>
    </LoginRegistration>
  );
};

export default Login;
