import { LegacyRef, PropsWithChildren } from 'react';

import { IValidationProps } from '@/components/new-form';

export interface IFieldWrapperProps
  extends IValidationProps,
    PropsWithChildren {
  label?: string;
  subTitle?: string;
  fieldWrapperClassName?: string;
  fieldWrapperRef?: LegacyRef<HTMLDivElement>;
}
