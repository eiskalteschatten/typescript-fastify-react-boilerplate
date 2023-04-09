import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { passwordRegex } from '@tfrb/shared/dist/lib/accounts';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { clearAccountError, register } from 'store/entities/account';
import usePageTitle from 'lib/usePageTitle';
import Button from 'components/Button';
import Input from 'components/Input';
import LoginRegistration from 'layouts/LoginRegistration';

const Register: React.FC = () => {
  const { t } = useTranslation(['account']);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.account);
  const navigate = useNavigate();

  usePageTitle(t('account:register'));

  useEffect(() => {
    dispatch(clearAccountError());
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email address!').required('Required!'),
      firstName: Yup.string().required('Required!'),
      lastName: Yup.string().required('Required!'),
      password: Yup.string()
        .matches(passwordRegex, t('account:passwordSchemaInvalid'))
        .required('Required!'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match!'),
    }),
    onSubmit: values => {
      dispatch(register(values)).then(() => navigate('/')).catch(console.error);
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
          id='firstName'
          name='firstName'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          error={formik.touched.firstName ? formik.errors.firstName : undefined}
          label={t('account:firstName')}
          required
          fullWidth
        />

        <Input
          id='lastName'
          name='lastName'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          error={formik.touched.lastName ? formik.errors.lastName : undefined}
          label={t('account:lastName')}
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

        <Input
          id='confirmPassword'
          name='confirmPassword'
          type='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          error={formik.touched.confirmPassword ? formik.errors.confirmPassword : undefined}
          label={t('account:confirmPassword')}
          required
          fullWidth
        />

        <Button type='submit' primary showLoader={isLoading}>{t('account:register')}</Button>
      </form>
    </LoginRegistration>
  );
};

export default Register;
