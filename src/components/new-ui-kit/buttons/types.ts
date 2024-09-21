import { LinkProps } from 'next/link';
import {
  ButtonHTMLAttributes,
  HTMLAttributeAnchorTarget,
  LegacyRef,
  PropsWithChildren,
  PropsWithRef,
  ReactNode,
} from 'react';

export enum ButtonTheme {
  BLUE = 'blue',
  BLUE_EXTRA = 'blueExtra',
  BLUE_OUTLINE = 'blueOutline',
  BLUE_WHITE = 'blueWhite',
  WHITE = 'white',
  WHITE_OUTLINE = 'whiteOutline',
  WHITE_BLACK = 'whiteBlack',
  GREY = 'grey',
  GREY_OUTLINE = 'greyOutline',
  DANGER = 'danger',
  DANGER_OUTLINE = 'dangerOutline',
  DANGER_WHITE = 'dangerWhite',
  BLUR = 'blur',
  BLACK = 'black',
}

export enum ButtonVariant {
  SQUARE = 'square',
  ROUNDED = 'rounded',
  INLINE = 'inline',
}

export interface IButtonStylesProps {
  theme?: ButtonTheme;
  variant?: ButtonVariant;
  icon?: {
    type: 'stroke' | 'fill';
    icon: ReactNode;
  };
  isShort?: boolean;
  withAnimation?: boolean;
}

export type TButtonProps = PropsWithRef<
  ButtonHTMLAttributes<HTMLButtonElement> & IButtonStylesProps
> & {
  reference?: LegacyRef<HTMLButtonElement>;
};

export type TLinkButtonProps = LinkProps &
  IButtonStylesProps &
  PropsWithChildren & {
    isExternal?: boolean;
    className?: string;
    target?: HTMLAttributeAnchorTarget;
    disabled?: boolean;
    download?: boolean;
  };
