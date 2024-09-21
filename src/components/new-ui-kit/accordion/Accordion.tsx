'use client';

import clsx from 'clsx';
import { cloneElement, FC, useEffect, useState } from 'react';

import { AccordionProps } from './types';

import styles from './Accordion.module.scss';

export const Accordion: FC<AccordionProps> = ({
  onChange,
  className = '',
  expanded = false,
  reverse = false,
  children,
  ...props
}) => {
  const [header, content] = children;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(expanded);
  }, [expanded]);

  const clickOnAccordion = () => {
    setIsOpen((prev) => !prev);

    if (typeof onChange === 'function') {
      onChange(!isOpen);
    }
  };

  const accordionStyle = clsx(styles.accordion, {
    [styles.reverse]: reverse,
    [className]: className,
  });

  return (
    <div {...props} className={accordionStyle} aria-expanded={isOpen}>
      {cloneElement(header, { onClick: clickOnAccordion, isOpen })}
      {cloneElement(content, { isOpen })}
    </div>
  );
};
