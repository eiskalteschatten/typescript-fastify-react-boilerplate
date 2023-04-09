import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { clearAccountError, login } from 'store/entities/account';
import usePageTitle from 'lib/usePageTitle';
import Input from 'components/Input';
import Button from 'components/Button';
import LoginRegistration from 'layouts/LoginRegistration';

const Login: React.FC = () => {
  const { t } = useTranslation(['account']);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.account);
  const navigate = useNavigate();

  usePageTitle(t('account:login'));

  useEffect(() => {
    dispatch(clearAccountError());
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email address!').required('Required!'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      dispatch(login(values)).then(() => navigate('/')).catch(console.error);
    },
  });

  return (
    <LoginRegistration>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email ? formik.errors.email : undefined}
          label={t('account:emailAddress')}
          required
          fullWidth
        />

        <Input
          id='password'
          name='password'
          type='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password ? formik.errors.password : undefined}
          label={t('account:password')}
          required
          fullWidth
        />

        <Button type='submit' primary showLoader={isLoading}>{t('account:logIn')}</Button>
      </form>
    </LoginRegistration>
  );
};

export default Login;
