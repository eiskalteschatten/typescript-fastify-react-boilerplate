import React from 'react';

import SearchBox from './components/SearchBox';
import LeftSide from './components/LeftSide';
import AccountMenu from './components/AccountMenu';

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
