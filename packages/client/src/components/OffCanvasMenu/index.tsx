import React from 'react';
import clsx from 'clsx';

import { useAppSelector } from '@/store/hooks';

import SidebarMain from '../SidebarMain';

import styles from './OffCanvasMenu.module.scss';

const OffCanvasMenu: React.FC = () => {
  const { mobileSidebarOpen } = useAppSelector(state => state.ui)

  return (
    <div className={clsx(styles.offCanvasMenu, {
      [styles.open]: mobileSidebarOpen,
    })}>
      <SidebarMain />
    </div>
  );
};

export default OffCanvasMenu;
