'use client';

import { YMInitializer } from 'react-yandex-metrika';

export const Metrika = () => {
  const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION === 'true';
  const isNavigatorCareer =
    typeof window !== 'undefined' &&
    window.location.host.includes('navigator-career');

  const YMComponent = isNavigatorCareer ? (
    <YMInitializer
      accounts={[97138732]}
      options={{ webvisor: true }}
      version='2'
    />
  ) : (
    <YMInitializer
      accounts={[93551247]}
      options={{ webvisor: true }}
      version='2'
    />
  );

  return isProduction && YMComponent;
};
