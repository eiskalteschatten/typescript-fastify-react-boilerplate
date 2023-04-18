import React from 'react';

import FullPageSuspense from '@/components/FullPageSuspense';

export const Loadable = (Component: React.LazyExoticComponent<React.FC>) => (props: any) => (
  <FullPageSuspense>
    <Component {...props} />
  </FullPageSuspense>
);

export default Loadable;
