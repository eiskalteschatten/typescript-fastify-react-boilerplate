import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import ComponentWithSuspense from 'components/ComponentWithSuspense';

const Login = React.lazy(() => import('../pages/Login'));
const Register = React.lazy(() => import('../pages/Register'));

const router = createBrowserRouter([
  {
    path: '/login',
    element: <ComponentWithSuspense node={<Login />} />,
  },
  {
    path: '/register',
    element: <ComponentWithSuspense node={<Register />} />,
  },
  {
    path: '*',
    element: <Navigate replace to='/login' />,
  },
]);

export default router;
