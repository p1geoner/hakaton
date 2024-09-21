import React, { ReactElement } from 'react';

export interface AccordionProps {
  expanded?: boolean;
  reverse?: boolean;
  className?: string;
  children: [
    ReactElement<AccordionHeaderProps>,
    ReactElement<AccordionContentProps>
  ];
  onChange?: (open: boolean) => void;
}

export interface AccordionHeaderProps {
  isOpen?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface AccordionContentProps {
  isOpen?: boolean;
  className?: string;
  children?: React.ReactNode;
}
