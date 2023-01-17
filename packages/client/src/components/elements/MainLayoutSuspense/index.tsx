import React, { Suspense } from 'react';

import SuspenseSpinner from 'components/elements/SuspenseSpinner';
import MainLayout from 'layouts/Main';

interface Props {
  children: React.ReactNode;
}

const MainLayoutSuspense: React.FC<Props> = ({ children }) => {
  return (
    <MainLayout>
      <Suspense fallback={
        <div style={{ flexGrow: 1 }}>
          <SuspenseSpinner />
        </div>
      }>
        {children}
      </Suspense>
    </MainLayout>
  );
};

export default MainLayoutSuspense;
