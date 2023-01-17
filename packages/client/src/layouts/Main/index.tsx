import React from 'react';

import Toolbar from './Toolbar';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Toolbar />

      <div className={styles.columnLayout}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
