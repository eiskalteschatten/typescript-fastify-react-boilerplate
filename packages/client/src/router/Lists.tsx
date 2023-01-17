import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ThreeColumnLayout from 'layouts/Main/sublayouts/ThreeColumn';
import { Props as SidebarItemProps } from 'components/SidebarItem';

const ListsRouter: React.FC = () => {
  const { t } = useTranslation(['lists']);

  const sidebarItems = useMemo<SidebarItemProps[]>(() => [
    {
      path: '/lists',
      ItemIcon: () => <span className='material-icons'>checklist</span>,
      title: t('wishlist'),
    },
  ], []);

  return (
    <ThreeColumnLayout sidebarItems={sidebarItems}>
      <Routes>
        {/* <Route path='/add' element={<EditBook />} /> */}

        <Route path='/:list' element={<div>lists test</div>} />
        <Route path='/:list/:id' element={<div />} />
        {/* <Route path='/:list/:id/edit' element={<EditBook />} /> */}

        {/* TODO: By default, the first list should be selected */}
        <Route path='*' element={<div />} />
      </Routes>
    </ThreeColumnLayout>
  );
};

export default ListsRouter;
