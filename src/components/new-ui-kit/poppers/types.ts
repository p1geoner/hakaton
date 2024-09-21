import { CSSProperties, ReactNode } from 'react';

export interface PortalProps {
  children?: ReactNode;
}

export interface PopoverProps {
  isOpen?: boolean;
  onClose: () => void;
  placement?: 'left' | undefined;
  offset?: [number, number];
  className?: string;
  refEl: HTMLElement | SVGElement | null;
  children?: ReactNode;
  style?: CSSProperties;
}

export interface PopupProps {
  isOpen?: boolean;
  onClose: () => void;
  className?: string;
  children?: ReactNode;
}
