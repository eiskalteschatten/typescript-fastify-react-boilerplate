import React, { useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from 'router';
import { useAppDispatch } from 'store/hooks';
import { setWindowWidth, setPrefersDarkMode } from 'store/entities/ui';
import GlobalErrorBoundary from 'components/GlobalErrorBoundary';
import GlobalInfo from 'components/GlobalInfo';
import GlobalError from 'components/GlobalError';
import GlobalLoader from 'components/GlobalLoader';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(setPrefersDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches));

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      dispatch(setPrefersDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches));
    });

    const handleResize = () => dispatch(setWindowWidth(window.innerWidth));
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <GlobalErrorBoundary>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalInfo />
      <GlobalError />
      <GlobalLoader />
    </GlobalErrorBoundary>
  );
};

export default App;
