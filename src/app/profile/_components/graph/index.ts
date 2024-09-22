import dynamic from 'next/dynamic';

export const MapField = dynamic(() => import('./Graph'), {
  ssr: false,
});
