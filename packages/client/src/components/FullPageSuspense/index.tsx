import React, { Suspense } from 'react';

import SuspenseSpinner from '@/components/SuspenseSpinner';

interface Props {
  children: React.ReactNode;
}

const FullPageSuspense: React.FC<Props> = ({ children }) => {
  return (
    <Suspense fallback={
      <div style={{ flexGrow: 1 }}>
        <SuspenseSpinner />
      </div>
    }>
      {children}
    </Suspense>
  );
};

export default FullPageSuspense;
