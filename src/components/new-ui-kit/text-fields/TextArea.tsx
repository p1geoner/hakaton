import clsx from 'clsx';
import { useRef, useState } from 'react';

import { FieldWrapper } from '@/components/new-ui';

import { ITextAreaProps } from './types';

import styles from './TextFields.module.scss';

export const TextArea = ({
  className,
  reference,
  resizable,
  disabled,
  isAutoResize = false,
  leftIcon,
  rightIcon,
  // FieldWrapperProps
  label,
  subTitle,
  // @ts-ignore
  error,
  fieldWrapperRef,
  fieldWrapperClassName,
  ...props
}: ITextAreaProps) => {
  const textAriaRef = useRef(null);
  const textFieldId = props.id ?? crypto.randomUUID();
  const [height, setHeight] = useState(
    textAriaRef?.current ? textAriaRef.current.style.height : 54
  );

  const fieldWrapperProps = {
    label,
    subTitle,
    error,
    fieldWrapperRef,
    fieldWrapperClassName,
  };

  const textAreaClasses = clsx(styles.textArea, {
    [styles.withLeftIcon]: !!leftIcon,
    [styles.withRightIcon]: !!rightIcon,
    [styles.notResizable]: !resizable,
    [styles.disabled]: disabled,
    [styles.error]: !!error,
    [className]: !!className,
  });

  const autoResize = () => {
    textAriaRef.current.style.height = 'auto';
    textAriaRef.current.style.height =
      textAriaRef.current.scrollHeight + 'px !important';
  };

  if (isAutoResize && textAriaRef.current !== null) {
    textAriaRef.current.addEventListener('input', autoResize);
  }

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

  const onIconClick = (type: 'left' | 'right') => {
    if (type === 'left') leftIcon?.onClick?.();
    if (type === 'right') rightIcon?.onClick?.();
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
        <textarea
          disabled={disabled}
          ref={isAutoResize ? textAriaRef : reference}
          className={textAreaClasses}
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
