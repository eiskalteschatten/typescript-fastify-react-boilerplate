import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayoutSuspense from 'components/MainLayoutSuspense';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const FourOhFour = React.lazy(() => import('../pages/FourOhFour'));

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={
        <MainLayoutSuspense>
          <Dashboard />
        </MainLayoutSuspense>
      } />

      <Route path='*' element={
        <MainLayoutSuspense>
          <FourOhFour />
        </MainLayoutSuspense>
      } />
    </Routes>
  );
};

export default MainRouter;
