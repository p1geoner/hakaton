import { ReactNode } from 'react';

export type TPlugProps = {
  textData: TPlugText;
  className?: string;
  icon?: ReactNode;
};

type TPlugText = {
  title: string;
  description: string;
  text?: ReactNode;
};
