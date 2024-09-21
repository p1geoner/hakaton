'use client';

import clsx from 'clsx';
import { FC } from 'react';

import { Radio } from '@/components/new-ui-kit';

import { RadioButtonGroupProps } from './types';

import styles from './RadioGroup.module.scss';

export const RadioGroup: FC<RadioButtonGroupProps> = ({
  buttonsConfig,
  formikSetter,
  formikValue,
  name,
  label,
  containerClass = '',
}) => {
  const containerClasses = clsx(styles.container, {
    [containerClass]: !!containerClass,
  });

  return (
    <div className={containerClasses}>
      {label && <span className={styles.label}>{label}</span>}

      <div className={styles.list}>
        {buttonsConfig.map((button, index) => (
          <label className={styles.button} key={index}>
            <Radio
              type='radio'
              label={button.label}
              name={name}
              value={button.value?.toString()}
              checked={formikValue?.toString() === button.value?.toString()}
              onChange={(e) => formikSetter(e.target.value)}
              disabled={!!button.disabled}
            />
          </label>
        ))}
      </div>
    </div>
  );
};
