'use client';

import React from 'react';
import ReactInputMask from 'react-input-mask';

import { TextField } from '@/components/new-ui-kit';

import { INumberFieldProps } from './types';

export const NumberField = ({
  value,
  onChange,
  disabled,
  ...props
}: INumberFieldProps) => {
  return (
    <ReactInputMask
      mask='99999999'
      value={value}
      onChange={onChange}
      maskChar={null}
      disabled={disabled}
    >
      {
        // @ts-ignore:next-line
        () => (
          <TextField
            value={value}
            onChange={onChange}
            disabled={disabled}
            {...props}
          />
        )
      }
    </ReactInputMask>
  );
};
