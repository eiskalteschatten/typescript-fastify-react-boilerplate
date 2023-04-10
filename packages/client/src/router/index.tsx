import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import ComponentWithSuspense from '@/components/ComponentWithSuspense';

const Homepage = React.lazy(() => import('../pages/Homepage'));
const AccountSettings = React.lazy(() => import('../pages/AccountSettings'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <ComponentWithSuspense node={<Homepage />} />,
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
