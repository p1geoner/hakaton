'use client';

import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import { IHoverWrapperProps } from './types';

import IcSend from '@/assets/new-icons/general/ic_send.svg';

import styles from './HoverWrapper.module.scss';

const HoverWrapper = ({
  button,
  wrapperClassName = '',
  children,
}: PropsWithChildren<IHoverWrapperProps>) => {
  const hoverWrapperClasses = clsx(styles.hoverWrapper, {
    [styles.isFullDynamicButton]: button?.type === 'dynamic' && button?.isFull,
  });

  const buttonClasses = clsx({
    [styles.staticButton]: button.type === 'static',
    [styles.dynamicButton]: button.type === 'dynamic',
    [button?.className ?? '']: button?.className,
  });

  const buttonStyles = {
    top: button.position?.top,
    right: button.position?.right,
    bottom: button.position?.bottom,
    left: button.position?.left,
  };

  return (
    <div className={hoverWrapperClasses}>
      <div className={wrapperClassName}>{children}</div>

      {button.type === 'static' && (
        <div
          className={buttonClasses}
          style={buttonStyles}
          data-disable-tracking
        >
          <span className={styles.text}>{button.text}</span>
        </div>
      )}

      {button.type === 'dynamic' && (
        <div
          className={buttonClasses}
          style={buttonStyles}
          data-disable-tracking
        >
          <IcSend />
          <div className={styles.textWrapper}>
            <span className={styles.text}>Перейти</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverWrapper;
