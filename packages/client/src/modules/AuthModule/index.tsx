import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';

import LoginRegistration from 'layouts/LoginRegistration';
import PageSuspense from 'components/PageSuspense';

const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));

const AuthModule: React.FC = () => {
  return (
    <LoginRegistration>
      <Routes>
        <Route path='/login' element={
          <PageSuspense>
            <Login />
          </PageSuspense>
        } />

        <Route path='/register' element={
          <PageSuspense>
            <Register />
          </PageSuspense>
        } />

        <Route path='*' element={<Navigate replace to={'/login'} />} />
      </Routes>
    </LoginRegistration>
  );
};

export default AuthModule;
