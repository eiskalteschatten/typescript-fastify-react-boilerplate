import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { useAppSelector } from 'store/hooks';
import { ReactComponent as Logo } from 'assets/images/dynamic-icon-monotone.svg';
import Card from 'components/Card';

import styles from './styles.module.scss';

const logoSize = 100;

interface Props {
  children: React.ReactNode;
}

const LoginRegistration: React.FC<Props> = ({ children }) => {
  const { t } = useTranslation(['account']);
  const { accountError } = useAppSelector(state => state.account);
  const loginMatch = useMatch({ path: '/login', end: true });
  const registrationMatch = useMatch({ path: '/register', end: true });

  return (
    <div className={styles.layout}>
      <Card className={styles.form}>
        <Logo width={logoSize} height={logoSize} />

        <div className={styles.tabs}>
          <Link to='/login' className={clsx(styles.tab, {
            [styles.selected]: loginMatch,
          })}>
            {t('account:login')}
          </Link>
          <Link to='/register' className={clsx(styles.tab, {
            [styles.selected]: registrationMatch,
          })}>
            {t('account:registration')}
          </Link>
        </div>

        {accountError && (<div className={styles.error}>{accountError}</div>)}

        {children}
      </Card>
    </div>
  );
};

export default LoginRegistration;
