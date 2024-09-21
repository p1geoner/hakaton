'use client';

import { DependencyList, useEffect } from 'react';

import { useHash } from '@/hooks/useHash';

import { scrollToNode } from '@/utils/scrollToNode';

// todo: change any type
export function useTabByHash<T>(
  tabVariant: T,
  setCurrentTab: any,
  effectDeps: DependencyList = []
) {
  const [hash] = useHash();

  useEffect(() => {
    if (hash) {
      const [tab, id] = hash.split('-');

      for (const key in tabVariant) {
        if (tabVariant[key] === tab) {
          setCurrentTab(tab as T);

          setTimeout(() => {
            scrollToNode(id);
          }, 40);
        }
      }
    }
  }, [hash, ...effectDeps]);
}
