import React from 'react';

import NavItem from './components/NavItem';
import useItemsTop from './useItemsTop';
import useItemsBottom from './useItemsBottom';

import styles from './styles.module.scss';

const NavSidebar: React.FC = () => {
  const topNavItems = useItemsTop();
  const bottomNavItems = useItemsBottom();

  return (
    <div className={styles.sidebar}>
      <div className={styles.nav}>
        <div>
          {topNavItems.map((item, index: number) => (
            <NavItem
              key={index}
              {...item}
            />
          ))}
        </div>
        <div>
          {bottomNavItems.map((item, index: number) => (
            <NavItem
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavSidebar;
