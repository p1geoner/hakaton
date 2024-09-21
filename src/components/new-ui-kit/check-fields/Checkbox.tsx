'use client';

import clsx from 'clsx';
import { FC } from 'react';

import { CheckboxProps } from './types';

import styles from './CheckFields.module.scss';

export const Checkbox: FC<CheckboxProps> = ({
  label,
  disabled,
  className = '',
  type = 'checkbox',
  ...props
}) => {
  const checkboxStyle = clsx(styles.checkbox, {
    [className]: className,
    [styles.disabled]: !!disabled,
  });

  return (
    <label
      className={checkboxStyle}
      onClick={(event) => event.stopPropagation()}
    >
      <input type={type} disabled={disabled} {...props} />

      <span>{label}</span>
    </label>
  );
};
