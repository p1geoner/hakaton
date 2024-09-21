'use client';

import { useContext } from 'react';

import { AppContextInterface } from '@/components/Logic/StoreProvider/types';
import { Context } from '@/components/new-logic';

import { IRootStore } from '@/types/stores/IRootStore';

type TUseStore = () => IRootStore;

export const useStore: TUseStore = () => {
  const context = useContext(Context) as AppContextInterface;
  return context.store;
};
