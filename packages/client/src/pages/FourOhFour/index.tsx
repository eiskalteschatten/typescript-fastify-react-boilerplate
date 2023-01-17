import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import MainLayout from 'layouts/Main';
import setPageTitle from 'lib/setPageTitle';

const FourOhFour: React.FC = () => {
  const { t } = useTranslation(['errors']);

  useEffect(() => {
    setPageTitle('404');
  }, []);

  return (
    <MainLayout>
      {t('errors:pageNotFound')}
    </MainLayout>
  );
};

export default FourOhFour;
