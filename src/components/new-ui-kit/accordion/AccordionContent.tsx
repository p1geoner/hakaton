'use client';

import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';

import { AccordionContentProps } from './types';

import styles from './Accordion.module.scss';

export const AccordionContent: FC<AccordionContentProps> = ({
  isOpen = false,
  className = '',
  children,
  ...props
}) => {
  const [height, setHeight] = useState('0');
  const [idTimeout, setIdTimeout] = useState<number | undefined>();
  const contentRef = useRef<HTMLHeadingElement>(null);
  const isOpenRef = useRef(isOpen);

  isOpenRef.current = isOpen;

  const styleHeight = {
    height,
  };

  const delay = () => {
    if (isOpenRef.current) setHeight('auto');
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current?.scrollHeight}px`);
      setIdTimeout(window.setTimeout(delay, 500));
    } else {
      if (height !== '0') {
        clearTimeout(idTimeout);
        setHeight(`${contentRef.current?.scrollHeight}px`);
        setTimeout(() => setHeight('0px'), 40);
      }
    }
  }, [contentRef, isOpen]);

  const accordionContentStyle = clsx(styles.accordionContent, {
    [className]: className,
  });

  return (
    <div
      {...props}
      className={accordionContentStyle}
      style={styleHeight}
      ref={contentRef}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};
