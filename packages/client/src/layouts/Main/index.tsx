import React from 'react';

import Toolbar from '@/components/Toolbar';
import SidebarMain from '@/components/SidebarMain';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-full'>
      <Toolbar />

      <div className='w-full h-full flex flex-row'>
        <SidebarMain />

        <div className='w-full h-full relative overflow-auto py-4'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
