const Wysiwyg = dynamic(() => import('./Wysiwyg'), {
  ssr: false,
});

import dynamic from 'next/dynamic';

import type { IWysiwygProps } from './types';

export { Wysiwyg, IWysiwygProps };
