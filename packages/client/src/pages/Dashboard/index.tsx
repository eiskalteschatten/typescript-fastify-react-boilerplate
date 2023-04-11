import React from 'react';

import usePageTitle from '@/lib/usePageTitle';
import MainLayout from '@/layouts/Main';

const Dashboard: React.FC = () => {
  usePageTitle();

  return (
    <MainLayout>
      <div className='container mx-auto px-8'>
        Dashboard
      </div>
    </MainLayout>
  );
};

export default Dashboard;
