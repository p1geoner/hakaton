import { InputHTMLAttributes, LegacyRef, ReactNode } from 'react';

import { IFieldWrapperProps } from '@/components/new-ui';

export interface ITextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    IFieldWrapperProps {
  leftIcon?: TTextFieldIcon;
  rightIcon?: TTextFieldIcon;
  reference?: LegacyRef<HTMLInputElement>;
}

export interface ITextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement>,
    IFieldWrapperProps {
  resizable?: boolean;
  reference?: LegacyRef<HTMLTextAreaElement>;
  isAutoResize?: boolean;
  leftIcon?: TTextFieldIcon;
  rightIcon?: TTextFieldIcon;
}

export type TTextFieldIcon = {
  icon: ReactNode;
  type: 'fill' | 'stroke';
  onClick?: () => void;
};
