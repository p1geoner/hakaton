import dynamic from 'next/dynamic';

import type { AddressFieldProps } from './types';

const AddressField = dynamic(() => import('./AddressField'), {
  ssr: false,
});

export { AddressField, AddressFieldProps };
