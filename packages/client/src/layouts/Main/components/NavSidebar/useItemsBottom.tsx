import { useTranslation } from 'react-i18next';

import { Props as NavItemProp } from './components/NavItem';

const useItemsButtom = (): NavItemProp[] => {
  const { t } = useTranslation(['nav']);

  return [
    {
      path: '/settings',
      ItemIcon: () => <span className='material-icons'>settings</span>,
      title: t('settings'),
      selectedPath: '/settings',
    },
  ];
};

export default useItemsButtom;
