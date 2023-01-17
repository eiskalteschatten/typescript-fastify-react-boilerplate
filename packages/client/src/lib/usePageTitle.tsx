import { useEffect } from 'react';

export const usePageTitle = (pageTitle?: string) => {
  const defaultPageTitle = 'Awesome App';

  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${defaultPageTitle}` : defaultPageTitle;
  }, [pageTitle]);
};

export default usePageTitle;
