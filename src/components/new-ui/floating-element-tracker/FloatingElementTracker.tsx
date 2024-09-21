'use client';

import clsx from 'clsx';
import { useRef, useState } from 'react';

import { IFloatingElementTrackerProps } from './types';

import IcGrab from '@/assets/new-icons/main/ic_grab.svg';

import styles from './FloatingElementTracker.module.scss';

export const FloatingElementTracker = ({
  className,
  disabledTracker,
  children,
}: IFloatingElementTrackerProps) => {
  const floatingElementRef = useRef<HTMLDivElement | null>(null);
  const [cursorPosition, setCursorPosition] = useState(null);
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseMove = (e) => {
    setFloatingElementScale(
      e.target.closest('[data-disable-tracking]') ? 0 : 1
    );

    const boundingRect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top;

    setCursorPosition({ x, y });
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setFloatingElementScale(0);
    setIsHover(false);
  };

  const setFloatingElementScale = (scale: number) => {
    if (floatingElementRef.current) {
      floatingElementRef.current.style.transform = `scale(${scale})`;
    }
  };

  const floatingElementStyles = {
    top: cursorPosition?.y - 40,
    left: cursorPosition?.x - 40,
  };

  const wrapperClasses = clsx(styles.wrapper, {
    [className]: !!className,
  });

  return (
    <section
      className={wrapperClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {!disabledTracker && isHover && (
        <div
          ref={floatingElementRef}
          style={floatingElementStyles}
          className={styles.floatingElement}
        >
          <IcGrab />
        </div>
      )}
    </section>
  );
};
