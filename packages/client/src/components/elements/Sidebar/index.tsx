import React, { useState, useEffect, useRef, CSSProperties } from 'react';

import { useAppSelector } from 'store/hooks';
import { setSidebarWidth } from 'store/entities/ui';

import * as constants from '../../../constants';
import ColumnDragger from '../ColumnDragger';

import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

const Sidebar: React.FC<Props> = ({ children }) => {
  const savedWidth = useAppSelector(state => state.ui.sidebarWidth);
  const windowWidth = useAppSelector(state => state.ui.windowWidth);
  const [width, setWidth] = useState<number | undefined>(savedWidth);
  const [style, setStyle] = useState<CSSProperties | undefined>();
  const columnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setStyle(windowWidth >= constants.window.WINDOW_WIDTHS.lgMin ? { flex: `0 0 ${width}px` } : undefined);
  }, [width, windowWidth]);

  return (
    <div
      className={styles.sidebar}
      style={style}
      ref={columnRef}
    >
      {children}

      {windowWidth >= constants.window.WINDOW_WIDTHS.lgMin && (
        <ColumnDragger
          columnRef={columnRef}
          setWidth={setWidth}
          setStoreWidth={setSidebarWidth}
          minWidth={235}
        />
      )}
    </div>
  );
};

export default Sidebar;
