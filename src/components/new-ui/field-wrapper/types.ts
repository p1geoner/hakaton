import { LegacyRef, PropsWithChildren } from 'react';

export interface IFieldWrapperProps extends PropsWithChildren {
  label?: string;
  subTitle?: string;
  fieldWrapperClassName?: string;
  fieldWrapperRef?: LegacyRef<HTMLDivElement>;
}
