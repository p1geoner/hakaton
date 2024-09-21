'use client';

import clsx from 'clsx';
import { FC } from 'react';

import { Button, ButtonTheme, ButtonVariant } from '@/components/new-ui-kit';

import { IAsyncButtonProps } from './types';

import styles from './AsyncButton.module.scss';

export const AsyncButton: FC<IAsyncButtonProps> = ({
  isLoading,
  children,
  disabled,
  className = '',
  ...props
}) => {
  const isDisabled = disabled || isLoading;

  const buttonClasses = clsx(styles.button, { [className]: !!className });
  const textClasses = clsx(styles.text, { [styles.hideText]: isLoading });

  return (
    <Button
      {...props}
      className={buttonClasses}
      disabled={isDisabled}
      theme={ButtonTheme.BLUE}
      variant={ButtonVariant.SQUARE}
    >
      <span className={textClasses}>{children}</span>
      {isLoading && <span className={styles.loader}></span>}
    </Button>
  );
};
