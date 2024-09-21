import { ReactNode } from 'react';

import { TMeta } from '@/types/general/unions';

export interface IFormWrapper {
  title: string;
  meta?: TMeta;
  isLoading?: boolean;
  children: ReactNode;
  backLink?: string;
  className?: string;
}
