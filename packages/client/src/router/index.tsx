import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PageSuspense from 'components/PageSuspense';

const Homepage = React.lazy(() => import('../pages/Homepage'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

function componentWithSuspense(node: React.ReactNode | React.LazyExoticComponent<any>): React.ReactNode {
  return (
    <PageSuspense>
      <>{node}</>
    </PageSuspense>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: componentWithSuspense(Homepage),
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
    path: '*',
    element: componentWithSuspense(NotFound),
  },
]);

export default router;
