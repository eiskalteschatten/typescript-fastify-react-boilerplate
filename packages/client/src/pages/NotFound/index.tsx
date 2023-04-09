import React from 'react';
import { useTranslation } from 'react-i18next';

import usePageTitle from 'lib/usePageTitle';
import MainLayout from 'layouts/Main';

const NotFound: React.FC = () => {
  const { t } = useTranslation(['errors']);

  usePageTitle('Page not found!');

  return (
    <MainLayout>
      <div>
        {t('errors:pageNotFound')}
      </div>
    </MainLayout>
  );
};

export default NotFound;
