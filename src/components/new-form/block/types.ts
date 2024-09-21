import { ReactNode } from 'react';

export interface IBlock {
  title?: string | ReactNode;
  children: ReactNode;
  className?: string;
  titleBold?: boolean;
}
