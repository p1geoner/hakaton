'use client';
import { useEffect, useState } from 'react';

export const useScreenDetector = () => {
  const [width, setWidth] = useState(1920);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 480;
  const isTablet = width <= 1000;
  const isDesktop = width > 1000;

  return { isMobile, isTablet, isDesktop, width };
};
