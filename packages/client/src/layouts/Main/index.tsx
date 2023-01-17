import React, { Suspense } from 'react';

import { useAppSelector } from 'store/hooks';

import * as constants from '../../constants';
import Toolbar from './components/Toolbar';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

const NavSidebar = React.lazy(() => import('./components/NavSidebar'));

const MainLayout: React.FC<Props> = ({ children }) => {
  const { windowWidth } = useAppSelector(state => state.ui);

  return (
    <div className={styles.layout}>
      <Toolbar />

      <div className={styles.columnLayout}>
        {windowWidth >= constants.window.WINDOW_WIDTHS.lgMin && (
          <Suspense fallback={<div style={{ width: 85 }} />}>
            <NavSidebar />
          </Suspense>
        )}

        {children}
      </div>
    </div>
  );
};

export default MainLayout;
