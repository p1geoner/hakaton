'use client';

import clsx from 'clsx';
import { FC } from 'react';

import { AccordionHeaderProps } from './types';

import IcArrow from '@/assets/new-icons/ui-kit/ic_accordion_arrow.svg';

import styles from './Accordion.module.scss';

export const AccordionHeader: FC<AccordionHeaderProps> = ({
  isOpen,
  onClick,
  className = '',
  children,
}) => {
  const accordionHeaderStyle = clsx(styles.accordionHeader, {
    [className]: !!className,
  });

  return (
    <div
      className={accordionHeaderStyle}
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <div className={styles.headerContent}>{children}</div>

      <div className={styles.accordionState}>
        <IcArrow className={styles.icon} />
      </div>
    </div>
  );
};
