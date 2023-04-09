import React from 'react';

import usePageTitle from '@/lib/usePageTitle';
import MainLayout from '@/layouts/Main';

const Homepage: React.FC = () => {
  usePageTitle();

  return (
    <MainLayout>
      <div>
        Home
      </div>
    </MainLayout>
  );
};

export default Homepage;
