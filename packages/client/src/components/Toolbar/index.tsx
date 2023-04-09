import React from 'react';

import LeftSide from '../ToolbarLeftSide';
import AccountMenu from '../ToolbarAccountMenu';

import styles from './Toolbar.module.scss';

const Toolbar: React.FC = () => {
  return (
    <div className={styles.toolbar}>
      <LeftSide />
      <AccountMenu />
    </div>
  );
};

export default Toolbar;
