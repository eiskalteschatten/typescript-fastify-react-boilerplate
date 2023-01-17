import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import MainLayout from 'layouts/Main';
import setPageTitle from 'lib/setPageTitle';

const Dashboard: React.FC = () => {
  const { t } = useTranslation(['dashboard']);

  useEffect(() => {
    setPageTitle(t('dashboard:dashboard'));
  }, []);

  return (
    <MainLayout>
      Dashboard
    </MainLayout>
  );
};

export default Dashboard;
