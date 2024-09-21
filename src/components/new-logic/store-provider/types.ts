import { ReactNode } from 'react';

import { IRootStore } from '@/types/stores/IRootStore';

export interface AppContextInterface {
  store: IRootStore;
}

export interface StoreProviderProps {
  children: ReactNode;
}
