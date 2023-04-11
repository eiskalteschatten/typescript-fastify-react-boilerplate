import React from 'react';

import Toolbar from '@/components/Toolbar';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-full'>
      <Toolbar />

      <div className='w-full h-full relative overflow-auto py-4'>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
