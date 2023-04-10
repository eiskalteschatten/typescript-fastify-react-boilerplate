import React from 'react';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import type { UserUpdate } from '@tfrb/shared';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import usePageTitle from '@/lib/usePageTitle';
import MainLayout from '@/layouts/Main';
import PageTitle from '@/components/PageTitle';
import Input from '@/components/Input';
import Button from '@/components/Button';

const AccountSettings: React.FC = () => {
  const { t } = useTranslation(['account', 'common']);
  const { isLoading, user } = useAppSelector(state => state.account);
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<UserUpdate>();
  const onSubmit: SubmitHandler<UserUpdate> = values => dispatch(login(values));

  usePageTitle(t('account:accountSettings'));

  if (!user) {
    return null;
  }

  return (
    <MainLayout>
      <div className='container mx-auto px-8'>
        <PageTitle>{t('account:accountSettings')}</PageTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='email'
            label={t('account:emailAddress')}
            defaultValue={user.email}
            required
            fullWidth
            {...register('email', { required: true })}
          />

          <Input
            type='text'
            label={t('account:firstName')}
            defaultValue={user.firstName}
            required
            fullWidth
            {...register('firstName', { required: true })}
          />

          <Input
            type='text'
            label={t('account:lastName')}
            defaultValue={user.lastName}
            required
            fullWidth
            {...register('lastName', { required: true })}
          />

          <Button type='submit' primary showLoader={isLoading}>{t('common:save')}</Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default AccountSettings;
