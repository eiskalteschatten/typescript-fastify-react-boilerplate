import React, { useLayoutEffect } from 'react';
import { RouterProvider, Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setWindowWidth, setPrefersDarkMode } from 'store/entities/ui';

import GlobalErrorBoundary from 'components/GlobalErrorBoundary';
import GlobalInfo from 'components/GlobalInfo';
import GlobalError from 'components/GlobalError';
import GlobalLoader from 'components/GlobalLoader';
import router from 'router';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, accessToken, refreshToken } = useAppSelector(state => state.account);
  const userIsLoggedin = user && accessToken && refreshToken;

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

  if (!userIsLoggedin) {
    return <Navigate to='/login' />;
  }

  return (
    <GlobalErrorBoundary>
      <RouterProvider router={router} />

      {/* <BrowserRouter>
        <Routes>
          {!userIsLoggedin ? (
            <Route path='*' element={<AuthModule />} />
          ) : (
            <>
              <Route path='/login' element={<Navigate replace to={'/'} />} />
              <Route path='/register' element={<Navigate replace to={'/'} />} />

              <Route path='*' element={<RootModule />} />
            </>
          )}
        </Routes>
      </BrowserRouter> */}

      <GlobalInfo />
      <GlobalError />
      <GlobalLoader />
    </GlobalErrorBoundary>
  );
};

export default App;
