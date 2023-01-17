import React from 'react';

import Sidebar from 'components/Sidebar';
import SidebarItem, { Props as SidebarItemProps } from 'components/SidebarItem';

interface Props {
  sidebarItems: SidebarItemProps[];
}

const SidebarColumn: React.FC<Props> = ({ sidebarItems }) => {
  return (
    <Sidebar>
      {sidebarItems.map((item: SidebarItemProps, index: number) => (
        <SidebarItem
          key={index}
          {...item}
        />
      ))}
    </Sidebar>
  );
};

export default SidebarColumn;
