import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import BasicLayout from 'layouts/Main/sublayouts/Basic';
import setPageTitle from 'lib/setPageTitle';

const FourOhFour: React.FC = () => {
  const { t } = useTranslation(['errors']);

  useEffect(() => {
    setPageTitle('404');
  }, []);

  return (
    <BasicLayout>
      {t('errors:pageNotFound')}
    </BasicLayout>
  );
};

export default FourOhFour;
