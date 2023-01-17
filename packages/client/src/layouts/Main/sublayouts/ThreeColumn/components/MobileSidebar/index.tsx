import React from 'react';
import clsx from 'clsx';

import { useAppSelector } from 'store/hooks';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

const MobileSidebar: React.FC<Props> = ({ children }) => {
  const { mobileSidebarOpen } = useAppSelector(state => state.ui);

  return (
    <div
      className={clsx(styles.sidebar, {
        [styles.open]: mobileSidebarOpen,
      })}
    >
      {children}
    </div>
  );
};

export default MobileSidebar;
