'use client';

import { FC, useEffect, useState } from 'react';

import {
  Button,
  ButtonTheme,
  Popover,
  TextField,
} from '@/components/new-ui-kit';

import useDebounce from '@/hooks/useDebounce';

import { TSimpleEntity } from '@/types/general/unions';

import { AsyncTextFieldService } from '@/API';

import { IAsyncTextField } from './types';

import styles from './AsyncTextField.module.scss';

export const ATextField: FC<IAsyncTextField> = ({
  type,
  onChange,
  name,
  value = '',
  ...props
}) => {
  const [options, setOptions] = useState<TSimpleEntity[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isOpenPopover, setIsOpenPopover] = useState(false);
  const [referenceElement, setReferenceElement] = useState<any>();
  const [inputValue, setInputValue] = useState(value);
  const debouncedValue = useDebounce(value, 250);

  const fetchConfig = {
    institutions: {
      get: (query: string) => AsyncTextFieldService.fetchInstitutions(query),
    },
  };

  const getOptions = async (query: string) => {
    setIsSearching(true);
    setIsOpenPopover(true);
    setOptions([]);

    if (query) {
      const response = await fetchConfig[type].get(query);

      if ('data' in response) {
        const institutions = response.data.institutions.filter(
          (item) => item.name !== debouncedValue
        );
        setOptions(institutions);
        institutions.length ? setIsOpenPopover(true) : setIsOpenPopover(false);
      } else {
        setIsOpenPopover(false);
        setOptions([]);
      }
    }

    setIsSearching(false);
  };

  const onClickHelpItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    setInputValue(e.currentTarget.value);
    setIsOpenPopover(false);
    setIsSearching(false);
  };

  const onClickValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInputValue(e.currentTarget.value);
    setIsOpenPopover(false);
    setIsSearching(false);
  };

  useEffect(() => {
    if (debouncedValue) {
      getOptions(debouncedValue as string);
    } else {
      setIsOpenPopover(false);
      setOptions([]);
    }
  }, [debouncedValue]);

  return (
    <>
      <TextField
        value={inputValue}
        name={name}
        onChange={onClickHelpItem}
        reference={setReferenceElement}
        {...props}
      />

      <Popover
        isOpen={isOpenPopover}
        refEl={referenceElement}
        onClose={() => setIsOpenPopover(false)}
        className={styles.popover}
      >
        <ul
          className={styles.list}
          style={{ width: referenceElement?.offsetWidth || 0 }}
        >
          {isSearching ? (
            <li className={styles.item}>Поиск...</li>
          ) : (
            options.map((option) => (
              <li key={option.id}>
                <Button
                  id={String(option.id)}
                  name={name}
                  value={option.name}
                  onClick={onClickValue}
                  theme={ButtonTheme.WHITE_BLACK}
                >
                  {option.name}
                </Button>
              </li>
            ))
          )}
        </ul>
      </Popover>
    </>
  );
};
