'use client';

import React, { FC } from 'react';

import { TextField } from '@/components/new-ui-kit';

import { LetterFieldProps } from './types';

export const LetterField: FC<LetterFieldProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  disabled,
  wrapperClassname,
}) => {
  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const checkIsLetter = !inputValue.match(/[^а-яА-Яё ]+$/);
    if (checkIsLetter) {
      onChange(inputValue);
    }
  };

  return (
    <TextField
      name={name}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onValueChange}
      fieldWrapperClassName={wrapperClassname}
      disabled={disabled}
    />
  );
};
