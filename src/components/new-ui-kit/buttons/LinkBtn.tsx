import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

import { ButtonTheme, ButtonVariant, TLinkButtonProps } from './types';

import styles from './Button.module.scss';

export const LinkBtn: FC<TLinkButtonProps> = ({
  theme = ButtonTheme.BLUE,
  variant = ButtonVariant.SQUARE,
  isShort = false,
  withAnimation = false,
  isExternal = false,
  className = '',
  icon,
  disabled,
  children,
  download,
  ...props
}) => {
  const buttonStyle: string = clsx(styles.button, {
    [className]: className,
    // colors
    [styles.blue]:
      theme === ButtonTheme.BLUE && variant !== ButtonVariant.INLINE,
    [styles.blueOutline]: theme === ButtonTheme.BLUE_OUTLINE,
    [styles.white]: theme === ButtonTheme.WHITE,
    [styles.whiteOutline]: theme === ButtonTheme.WHITE_OUTLINE,
    [styles.grey]: theme === ButtonTheme.GREY,
    [styles.greyOutline]: theme === ButtonTheme.GREY_OUTLINE,
    [styles.danger]: theme === ButtonTheme.DANGER,
    [styles.dangerOutline]: theme === ButtonTheme.DANGER_OUTLINE,
    [styles.blur]: theme === ButtonTheme.BLUR,
    [styles.black]: theme === ButtonTheme.BLACK,
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

  return isExternal ? (
    // @ts-ignore
    <a className={buttonStyle} download={download} {...props}>
      {icon && <span className={iconWrapperClasses}>{icon.icon}</span>}
      {children && <span className={styles.text}>{children}</span>}
    </a>
  ) : (
    <Link className={buttonStyle} {...props}>
      {icon && <span className={iconWrapperClasses}>{icon.icon}</span>}
      {children && <span className={styles.text}>{children}</span>}
    </Link>
  );
};
