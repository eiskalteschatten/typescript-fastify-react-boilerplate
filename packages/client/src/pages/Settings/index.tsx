import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import BasicLayout from 'layouts/Main/sublayouts/Basic';
import setPageTitle from 'lib/setPageTitle';

const Settings: React.FC = () => {
  const { t } = useTranslation(['nav']);

  useEffect(() => {
    setPageTitle(t('nav:settings'));
  }, []);

  return (
    <BasicLayout>
      Settings
    </BasicLayout>
  );
};

export default Settings;
