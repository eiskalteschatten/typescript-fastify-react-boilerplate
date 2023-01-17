import React from 'react';

import SearchBox from './SearchBox';
import LeftSide from './LeftSide';
import AccountMenu from './AccountMenu';

import styles from './styles.module.scss';

const Toolbar: React.FC = () => {
  return (
    <div className={styles.toolbar}>
      <LeftSide />
      <SearchBox />
      <AccountMenu />
    </div>
  );
};

export default Toolbar;
