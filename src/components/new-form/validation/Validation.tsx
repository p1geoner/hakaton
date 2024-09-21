import { IValidationProps } from './types';

import styles from './Validation.module.scss';

export const Validation = ({ error }: IValidationProps) => {
  if (!error) return null;

  const errorMessage = Array.isArray(error) ? error.join(', ') : error;

  return (
    <span className={styles.validation} data-form-error-validation>
      {String(errorMessage)}
    </span>
  );
};
