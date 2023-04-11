import React from 'react';
import { useTranslation } from 'react-i18next';

import Toolbar from '@/components/Toolbar';
import Sidebar from '@/components/Sidebar';
import SidebarItem from '@/components/SidebarItem';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col w-full h-full'>
      <Toolbar />

      <div className='w-full h-full flex flex-row'>
        <Sidebar>
          <SidebarItem
            path='/'
            title={t('nav:dashboard')}
            ItemIcon={() => <span className='material-icons'>dashboard</span>}
            matchEnd
          />
        </Sidebar>

        <div className='w-full h-full relative overflow-auto py-4'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
