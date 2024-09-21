'use client';

import { createContext, PropsWithChildren } from 'react';

import store from '@/store/store';

import { AppContextInterface } from './types';

export const Context = createContext<AppContextInterface>({ store: store });
// configure({ enforceActions: "never" });
export const StoreProvider = ({ children }: PropsWithChildren) => {
  return <Context.Provider value={{ store }}>{children}</Context.Provider>;
};
