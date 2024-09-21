'use client';

import clsx from 'clsx';
import { FC } from 'react';

import { Validation } from '@/components/new-form';

import { IFieldWithValidationProps } from './types';

import styles from './FildWithValidation.module.scss';

export const FieldWithValidation: FC<IFieldWithValidationProps> = ({
  children,
  wrapperClassName = '',
  ...props
}) => {
  const wrapperClasses = clsx(styles.wrapper, {
    [wrapperClassName]: !!wrapperClassName,
  });

  return (
    <div className={wrapperClasses}>
      {children}
      <Validation error={props.errors} />
    </div>
  );
};
