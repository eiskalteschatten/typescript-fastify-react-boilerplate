import React, { PropsWithChildren } from 'react';

const PageTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className='text-2xl font-semibold'>
      {children}
    </h1>
  );
};

export default PageTitle;
