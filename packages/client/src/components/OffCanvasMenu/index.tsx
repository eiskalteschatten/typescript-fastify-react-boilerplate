import React from 'react';
import clsx from 'clsx';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setMobileSidebarOpen } from '@/store/entities/ui';

import Button from '../Button';
import SidebarMain from '../SidebarMain';
import LogoDarkLight from '../LogoDarkLight';

import styles from './OffCanvasMenu.module.scss';

const OffCanvasMenu: React.FC = () => {
  const { mobileSidebarOpen } = useAppSelector(state => state.ui)
  const dispatch = useAppDispatch();

  return (
    <div className={clsx(styles.offCanvasMenu, {
      [styles.open]: mobileSidebarOpen,
    })}>

      <div className='w-full flex justify-center'>
        <Button
          className={styles.closeButton}
          iconButton
          onClick={() => dispatch(setMobileSidebarOpen(false))}
        >
          <span className='material-icons'>close</span>
        </Button>

        <LogoDarkLight className={styles.logo} />
      </div>

      <SidebarMain />
    </div>
  );
};

export default OffCanvasMenu;
