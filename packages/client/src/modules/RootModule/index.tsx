import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layouts/Main';

import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';

const RootModule: React.FC = () => {
  // The RootModule is responsible for everything that happens at the root levels and all of its content.
  // It is responsible for the home page (located at "/") as well as the 404 page.
  // It also controls the routes for all of its components.

  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default RootModule;
