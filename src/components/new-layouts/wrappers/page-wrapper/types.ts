import { Metadata } from 'next';
import { ReactNode } from 'react';

export interface IPageWrapper {
  meta?: Metadata;
  mainStyles?: string;
  children: ReactNode;
}
