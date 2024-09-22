import clsx from 'clsx';

import { FieldWrapper } from '@/components/new-ui';

import { ITextFieldProps } from './types';

import styles from './TextFields.module.scss';

export const TextField = ({
  id,
  leftIcon,
  rightIcon,
  disabled,
  reference,
  placeholder = ' ',
  className,
  // FieldWrapperProps
  label,
  subTitle,
  // @ts-ignore
  error,
  fieldWrapperRef,
  fieldWrapperClassName,
  ...props
}: ITextFieldProps) => {
  const textFieldId = id ?? crypto.randomUUID();

  const fieldWrapperProps = {
    label,
    subTitle,
    error,
    fieldWrapperRef,
    fieldWrapperClassName,
  };

  const onIconClick = (type: 'left' | 'right') => {
    if (type === 'left') leftIcon?.onClick?.();
    if (type === 'right') rightIcon?.onClick?.();
  };

  const textFieldStyle = clsx(styles.input, {
    [styles.withLeftIcon]: !!leftIcon,
    [styles.withRightIcon]: !!rightIcon,
    [styles.disabled]: disabled,
    [styles.error]: error,
    [className]: !!className,
  });

  const getIconWrapperClasses = (type: 'left' | 'right') => {
    const icon = type === 'left' ? leftIcon : rightIcon;

    return clsx({
      [styles.leftIconWrapper]: type === 'left',
      [styles.rightIconWrapper]: type === 'right',
      [styles.fillIconWrapper]: icon?.type === 'fill',
      [styles.disabledFillIconWrapper]: icon?.type === 'fill' && disabled,
      [styles.strokeIconWrapper]: icon?.type === 'stroke',
      [styles.disabledStrokeIconWrapper]: icon?.type === 'stroke' && disabled,
      [styles.iconHasOnClick]: icon?.onClick && !disabled,
    });
  };

  return (
    <FieldWrapper {...fieldWrapperProps}>
      <div className={styles.inputWrapper}>
        {leftIcon && (
          <label
            htmlFor={textFieldId}
            className={getIconWrapperClasses('left')}
            onClick={() => onIconClick('left')}
          >
            {leftIcon.icon}
          </label>
        )}

        <input
          ref={reference}
          id={textFieldId}
          disabled={disabled}
          placeholder={placeholder}
          className={textFieldStyle}
          {...props}
        />

        {rightIcon && (
          <label
            htmlFor={textFieldId}
            className={getIconWrapperClasses('right')}
            onClick={() => onIconClick('right')}
          >
            {rightIcon.icon}
          </label>
        )}
      </div>
    </FieldWrapper>
  );
};
