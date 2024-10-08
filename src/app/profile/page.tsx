'use client';

import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { Course } from '@/app/profile/_components/courses/Courses';
import { Header } from '@/app/profile/_components/header/Header';

import { PageWrapper } from '@/components/new-layouts';

import { useStore } from '@/hooks/useStore';

import { staticLinks } from '@/config/routingLinks';

import styles from './styles.module.scss';

const ProfilePage: FC = observer(() => {
  const store = useStore();
  const authStore = store.auth;
  const router = useRouter();

  if (!authStore.isAuth) {
    router.push(staticLinks.authorization);
    return null;
  }

  const user = authStore.user;

  return (
    <PageWrapper mainStyles={styles.main}>
      {user && !authStore.isLoading && <Header user={user} />}
      <Course />
    </PageWrapper>
  );
});
export default ProfilePage;
