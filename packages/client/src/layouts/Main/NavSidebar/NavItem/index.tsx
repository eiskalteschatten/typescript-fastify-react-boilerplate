import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import clsx from 'clsx';

import styles from './styles.module.scss';

export interface Props {
  path: string;
  ItemIcon: React.FunctionComponent;
  title: string;
  selectedPath: string;
}

const NavItem: React.FC<Props> = ({ ItemIcon, title, path, selectedPath }) => {
  const resolved = useResolvedPath(selectedPath);
  const match = useMatch({ path: resolved.pathname, end: resolved.pathname === '/' });

  if (path !== '/' && path.charAt(path.length -1) === '/') {
    path = path.slice(0, -1);
  }

  return (
    <Link
      to={path}
      className={clsx({
        [styles.sidebarItem]: true,
        [styles.selected]: match,
      })}
    >
      <div className={styles.icon}>
        <ItemIcon />
      </div>

      <span className={styles.text}>{title}</span>
    </Link>
  );
};

export default NavItem;
