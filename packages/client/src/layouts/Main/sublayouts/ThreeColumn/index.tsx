import React, { useMemo } from 'react';

import { useAppSelector } from 'store/hooks';
import { Props as SidebarItemProps } from 'components/SidebarItem';

import SidebarColumn from './SidebarColumn';
import MobileSidebar from './MobileSidebar';

import * as constants from '../../../../constants';

import styles from './styles.module.scss';

interface Props {
  sidebarItems: SidebarItemProps[];
  children: React.ReactNode;
}

const ThreeColumnLayout: React.FC<Props> = ({ sidebarItems, children }) => {
  const { windowWidth } = useAppSelector(state => state.ui);
  const sidebar = useMemo(() => <SidebarColumn sidebarItems={sidebarItems} />, [sidebarItems]);

  return (
    <>
      {windowWidth >= constants.window.WINDOW_WIDTHS.lgMin
        ? sidebar
        : (
          <MobileSidebar>
            {sidebar}
          </MobileSidebar>
        )
      }

      <div className={styles.rightSide}>
        {children}
      </div>
    </>
  );
};

export default ThreeColumnLayout;
