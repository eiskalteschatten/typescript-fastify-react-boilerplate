import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import BasicLayout from 'layouts/Main/sublayouts/Basic';
import setPageTitle from 'lib/setPageTitle';

const Dashboard: React.FC = () => {
  const { t } = useTranslation(['dashboard']);

  useEffect(() => {
    setPageTitle(t('dashboard:dashboard'));
  }, []);

  return (
    <BasicLayout>
      Dashboard
    </BasicLayout>
  );
};

export default Dashboard;
