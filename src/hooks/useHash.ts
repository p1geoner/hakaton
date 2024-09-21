'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export type changeHashParams = {
  reloadPrevIdenticalHash?: boolean;
  clearSearchParams?: boolean;
};

export function useHash() {
  const [hash, setHash] = useState<string | null>(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (window) {
      const windowHash = window.location.hash.slice(1);

      if (!windowHash && !hash) setHash(null);
      else if (hash !== windowHash) setHash(windowHash);
    }
  }, [searchParams]);

  const onChangeHash = (newHash: string | null, params?: changeHashParams) => {
    if (newHash === hash && !params?.reloadPrevIdenticalHash) return;

    if (params?.reloadPrevIdenticalHash)
      window.history.pushState(null, '', pathname);

    let url = pathname;

    if (!params?.clearSearchParams && searchParams.size)
      url += `?${searchParams.toString()}`;
    if (newHash) url += `#${newHash}`;

    setHash(newHash);

    if (!params?.reloadPrevIdenticalHash)
      window.history.pushState(null, '', url);
    else
      setTimeout(
        () => window.history.pushState(null, '', `${pathname}#${newHash}`),
        50
      );
  };

  return [hash, onChangeHash] as const;
}
