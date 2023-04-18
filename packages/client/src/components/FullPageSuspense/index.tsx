import React, { Suspense } from 'react';

import PageLoader from '../PageLoader';

interface Props {
  children: React.ReactNode;
}

const FullPageSuspense: React.FC<Props> = ({ children }) => {
  return (
    <Suspense fallback={<PageLoader />}>
      {children}
    </Suspense>
  );
};

export default FullPageSuspense;
