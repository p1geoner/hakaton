'use client';

import clsx from 'clsx';
import { FC } from 'react';

import { RadioProps } from './types';

import styles from './CheckFields.module.scss';

export const Radio: FC<RadioProps> = ({
  label,
  disabled,
  className = '',
  type = 'radio',
  ...props
}) => {
  const radioStyle = clsx(styles.radio, {
    [className]: className,
    [styles.disabled]: !!disabled,
  });

  return (
    <label className={radioStyle} onClick={(event) => event.stopPropagation()}>
      <input disabled={disabled} type={type} {...props} />

      <span>{label}</span>
    </label>
  );
};
