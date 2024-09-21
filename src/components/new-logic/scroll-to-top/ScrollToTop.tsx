'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 100);
  }, [pathname]);

  return null;
};
