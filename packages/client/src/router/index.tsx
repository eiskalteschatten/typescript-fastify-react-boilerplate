import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import ComponentWithSuspense from '@/components/ComponentWithSuspense';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const AccountSettings = React.lazy(() => import('../pages/AccountSettings'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <ComponentWithSuspense node={<Dashboard />} />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: 'team',
    //     element: <Team />,
    //     // loader: teamLoader,
    //   },
    // ],
  },
  {
    path: '/account',
    element: <ComponentWithSuspense node={<AccountSettings />} />,
  },
  {
    path: '/login',
    element: <Navigate replace to='/' />,
  },
  {
    path: '/register',
    element: <Navigate replace to='/' />,
  },
  {
    path: '*',
    element: <ComponentWithSuspense node={<NotFound />} />,
  },
]);

export default router;
