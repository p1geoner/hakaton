'use client';

import { observer } from 'mobx-react-lite';
import { PropsWithChildren, useEffect } from 'react';

import { useStore } from '@/hooks/useStore';

export const AuthProvider = observer(({ children }: PropsWithChildren) => {
  const store = useStore();
  const userStore = store.auth;

  useEffect(() => {
    userStore.checkAuth();
  }, []);

  return children;
});
