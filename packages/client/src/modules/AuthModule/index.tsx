import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';

import LoginRegistration from 'layouts/LoginRegistration';

import Login from './pages/Login';
import Register from './pages/Register';

const AuthModule: React.FC = () => {

  return (
    <LoginRegistration>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Navigate replace to={'/login'} />} />
      </Routes>
    </LoginRegistration>
  );
};

export default AuthModule;
