import React from 'react';

import Input from 'components/Input';
import { ReactComponent as SearchIcon } from 'assets/images/search.svg';

import styles from './styles.module.scss';

const SearchBox: React.FC = () => {
  return (
    <div className={styles.searchBox}>
      <Input
        type='search'
        placeholder='Search'
        fullWidth
        className={styles.input}
        icon={<SearchIcon />}
      />
    </div>
  );
};

export default SearchBox;
