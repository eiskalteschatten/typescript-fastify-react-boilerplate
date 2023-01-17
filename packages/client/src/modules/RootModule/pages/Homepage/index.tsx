import React from 'react';

import usePageTitle from 'lib/usePageTitle';

const Homepage: React.FC = () => {
  usePageTitle();

  return (
    <div>
      Home
    </div>
  );
};

export default Homepage;
