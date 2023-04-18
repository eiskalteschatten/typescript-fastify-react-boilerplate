import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import Loadable from '@/lib/Loadable';
import MainLayout from '@/layouts/Main';

const Dashboard = Loadable(React.lazy(() => import('../pages/Dashboard')));
const AccountSettings = Loadable(React.lazy(() => import('../pages/AccountSettings')));
const NotFound = Loadable(React.lazy(() => import('../pages/NotFound')));

const router = createBrowserRouter([
  {
    path: '/',
    element: (<MainLayout />),
    children: [
      {
        path: '',
        element: <Dashboard />,
        // loader: teamLoader,
      },
      {
        path: '/account',
        element: (<AccountSettings />),
      },
    ],
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
    element: (
      <MainLayout>
        <NotFound />
      </MainLayout>
    ),
  },
]);

export default router;
