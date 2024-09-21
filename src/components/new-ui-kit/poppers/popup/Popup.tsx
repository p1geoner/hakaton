'use client';

import clsx from 'clsx';
import { FC, useEffect } from 'react';

import Portal from '../Portal';
import { PopupProps } from '../types';

import styles from './Popup.module.scss';

const Popup: FC<PopupProps> = ({
  isOpen,
  onClose,
  children,
  className = '',
  ...props
}) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'unset';
    }

    return () => {
      document.documentElement.style.overflowY = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const contentClasses = clsx({
    [styles.content]: true,
    [className]: className,
  });

  return (
    <Portal>
      <div className={styles.popup} role='dialog'>
        <div
          className={styles.overlay}
          role='button'
          tabIndex={0}
          onClick={onClose}
        >
          <div
            {...props}
            className={contentClasses}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Popup;
