'use client';

import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { Header } from '@/app/profile/_components/header/Header';

import { PageWrapper } from '@/components/new-layouts';

import { useStore } from '@/hooks/useStore';

import styles from './styles.module.scss';

const ProfilePage: FC = observer(() => {
  const store = useStore();
  const authStore = store.auth;

  const user = authStore.user;

  console.log(store.auth.user);

  const router = useRouter();

  return (
    <PageWrapper mainStyles={styles.main}>
      {user && !authStore.isLoading && <Header user={user} />}
    </PageWrapper>
  );
});
export default ProfilePage;
