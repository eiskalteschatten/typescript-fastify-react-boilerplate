import React from 'react';

interface Props {
  children: React.ReactNode;
}

const BasicLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default BasicLayout;
