import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import BasicLayout from 'layouts/Main/sublayouts/Basic';
import setPageTitle from 'lib/setPageTitle';

const Account: React.FC = () => {
  const { t } = useTranslation(['account']);

  useEffect(() => {
    setPageTitle(t('account:accountSettings'));
  }, []);

  return (
    <BasicLayout>
      Account
    </BasicLayout>
  );
};

export default Account;
