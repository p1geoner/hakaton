import clsx from 'clsx';

import { IFieldWrapperProps } from './types';

import styles from './FieldWrapper.module.scss';

export const FieldWrapper = ({
  label,
  subTitle,
  children,
  fieldWrapperClassName,
  fieldWrapperRef,
  ...validationProps
}: IFieldWrapperProps) => {
  const fieldWrapperClasses = clsx(styles.fieldWrapper, {
    [fieldWrapperClassName]: !!fieldWrapperClassName,
  });

  return (
    <div className={fieldWrapperClasses} ref={fieldWrapperRef}>
      {label && <span className={styles.text}>{label}</span>}
      {children}
      {subTitle && <span className={styles.text}>{subTitle}</span>}
    </div>
  );
};
