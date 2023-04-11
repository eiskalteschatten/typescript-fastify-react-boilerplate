import React from 'react';

import { useAppSelector } from '@/store/hooks';
import Toolbar from '@/components/Toolbar';
import SidebarMain from '@/components/SidebarMain';
import OffCanvasMenu from '@/components/OffCanvasMenu';

import * as constants from '@/constants';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const { windowWidth } = useAppSelector(state => state.ui);

  return (
    <div className='flex flex-col w-full h-full'>
      <Toolbar />

      <div className='w-full h-full flex flex-row'>
        {windowWidth >= constants.window.WINDOW_WIDTHS.lgMin ? (
          <SidebarMain />
        ) : (
          <OffCanvasMenu />
        )}

        <div className='w-full h-full relative overflow-auto py-4'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
