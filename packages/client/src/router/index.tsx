import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import FullPageSuspense from '@/components/FullPageSuspense';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const AccountSettings = React.lazy(() => import('../pages/AccountSettings'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Dashboard />),
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
    element: (<AccountSettings />),
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
    element: (<NotFound />),
  },
]);

export default router;
