'use client';

import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import ReactInputMask from 'react-input-mask';

import { TextField, Checkbox } from '@/components/new-ui-kit';

import { PhoneFieldProps } from './types';

import { getOnlyNumbers, transformPhoneToResponse } from './utils';

import styles from './PhoneField.module.scss';

export const PhoneField: FC<PhoneFieldProps> = ({
  wrapperClassName = '',
  value,
  onChange,
  name,
  label,
}) => {
  const [phone, setPhone] = useState(
    value ? getOnlyNumbers(value).substring(1) : ''
  );
  const [isEmployer, setIsEmployer] = useState(value?.[8] === ')');

  const [pasteEventOccurred, setPasteEventOccurred] = useState(false);

  const [defaultMask, employerMask] = ['(@99) 999-99-99', '(9999) 99-99-99'];
  const [defaultPlaceholder, employerPlaceholder] = [
    '(900) 158-77-32',
    '(4242) 58-77-32',
  ];
  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (pasteEventOccurred) {
      setPasteEventOccurred(false);
      return;
    }

    const value = event.target.value;
    const phoneNumbers = getOnlyNumbers(value);
    if (isEmployer) {
      setPhone(value);
    } else {
      const hasSevenOrEight =
        phoneNumbers[0] === '7' || phoneNumbers[0] === '8';
      setPhone(hasSevenOrEight ? value.replace(/[78]/, '') : value);
    }
  };

  const onValuePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    setPasteEventOccurred(true);

    const pasted = event.clipboardData;

    if (pasted) {
      const pastedText = pasted.getData('text');
      const phoneNumbers = getOnlyNumbers(pastedText);

      if (phoneNumbers.length > 10) {
        const res = phoneNumbers.slice(1);
        setPhone(res);
      } else {
        setPhone(phoneNumbers);
      }
    }
  };

  useEffect(() => {
    onChange(transformPhoneToResponse(phone, isEmployer) || '');
  }, [phone, isEmployer]);

  useEffect(() => {
    if (!value) setPhone('');
  }, [value]);

  const onToggleRole = () => setIsEmployer((prev) => !prev);

  const formatChars = {
    '9': '[0-9]',
    '@': '[8-9]',
  };

  const phoneFieldClasses = clsx(styles.phoneField, {
    [wrapperClassName]: !!wrapperClassName,
  });

  return (
    <div className={phoneFieldClasses}>
      {!!label && <span className={styles.label}>{label}</span>}

      <div className={styles.phoneFieldWrapper}>
        <div className={styles.prefixWrapper}>
          <span className={styles.prefix}>+7</span>
        </div>

        <ReactInputMask
          mask={isEmployer ? employerMask : defaultMask}
          value={phone}
          onChange={onValueChange}
          // @ts-ignore
          maskChar={null}
          onPaste={onValuePaste}
          // @ts-ignore
          formatChars={formatChars}
        >
          {
            // @ts-ignore
            () => (
              <TextField
                className={styles.phoneInput}
                name={name}
                placeholder={
                  isEmployer ? employerPlaceholder : defaultPlaceholder
                }
                value={phone}
                onChange={onValueChange}
                onPaste={onValuePaste}
              />
            )
          }
        </ReactInputMask>
      </div>

      <Checkbox
        checked={isEmployer}
        onChange={onToggleRole}
        label='Другой телефонный формат'
      />
    </div>
  );
};
