import clsx from 'clsx';
import { FC } from 'react';

import { ButtonTheme, ButtonVariant, TButtonProps } from './types';

import styles from './Button.module.scss';

export const Button: FC<TButtonProps> = ({
  theme = ButtonTheme.BLUE,
  variant = ButtonVariant.SQUARE,
  isShort = false,
  withAnimation = false,
  disabled,
  className = '',
  reference,
  icon,
  children,
  ...props
}) => {
  const buttonStyle: string = clsx(styles.button, {
    [className]: className,
    // colors
    [styles.blue]:
      theme === ButtonTheme.BLUE && variant !== ButtonVariant.INLINE,
    [styles.blueExtra]:
      theme === ButtonTheme.BLUE_EXTRA && variant !== ButtonVariant.INLINE,
    [styles.blueOutline]: theme === ButtonTheme.BLUE_OUTLINE,
    [styles.blueWhite]: theme === ButtonTheme.BLUE_WHITE,
    [styles.white]: theme === ButtonTheme.WHITE,
    [styles.whiteOutline]: theme === ButtonTheme.WHITE_OUTLINE,
    [styles.whiteBlack]: theme === ButtonTheme.WHITE_BLACK,
    [styles.grey]: theme === ButtonTheme.GREY,
    [styles.greyOutline]: theme === ButtonTheme.GREY_OUTLINE,
    [styles.danger]: theme === ButtonTheme.DANGER,
    [styles.dangerOutline]: theme === ButtonTheme.DANGER_OUTLINE,
    [styles.dangerWhite]: theme === ButtonTheme.DANGER_WHITE,
    [styles.blur]: theme === ButtonTheme.BLUR,
    // variants
    [styles.square]: variant === ButtonVariant.SQUARE,
    [styles.rounded]: variant === ButtonVariant.ROUNDED,
    [styles.inline]: variant === ButtonVariant.INLINE,
    // another
    [styles.shortSquare]: variant === ButtonVariant.SQUARE && isShort,
    [styles.shortRounded]:
      (variant === ButtonVariant.ROUNDED && isShort) || withAnimation,
    [styles.withAnimation]: withAnimation,
    [styles.disabled]: disabled,
  });

  const iconWrapperClasses = clsx(styles.iconWrapper, {
    [styles.fillIconWrapper]: icon?.type === 'fill',
    [styles.strokeIconWrapper]: icon?.type === 'stroke',
  });

  return (
    <button ref={reference} className={buttonStyle} {...props}>
      {icon && <span className={iconWrapperClasses}>{icon?.icon}</span>}
      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
