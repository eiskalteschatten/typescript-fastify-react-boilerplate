import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import Loadable from '@/lib/Loadable';
import LoginRegistration from '@/layouts/LoginRegistration';

const Login = Loadable(React.lazy(() => import('../pages/Login')));
const Register = Loadable(React.lazy(() => import('../pages/Register')));

const router = createBrowserRouter([
  {
    path: '/',
    element: (<LoginRegistration />),
    children: [
      {
        path: 'login',
        element: (<Login />),
      },
      {
        path: 'register',
        element: (<Register />),
      },
    ],
  },
  {
    path: '*',
    element: <Navigate replace to='/login' />,
  },
]);

export default router;
