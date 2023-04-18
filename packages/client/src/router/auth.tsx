import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import FullPageSuspense from '@/components/FullPageSuspense';

const Login = React.lazy(() => import('../pages/Login'));
const Register = React.lazy(() => import('../pages/Register'));

const router = createBrowserRouter([
  {
    path: '/login',
    element: (<Login />),
  },
  {
    path: '/register',
    element: (<Register />),
  },
  {
    path: '*',
    element: <Navigate replace to='/login' />,
  },
]);

export default router;
