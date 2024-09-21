'use client';

import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { RawResult } from 'leaflet-geosearch/lib/providers/bingProvider';
import { SearchResult } from 'leaflet-geosearch/lib/providers/provider';
import { ChangeEvent, FC, useEffect, useState } from 'react';

import { Popover, TextField } from '@/components/new-ui-kit';

import useDebounce from '@/hooks/useDebounce';

import { TAddressInfo } from '@/types/general/unions';

import { AddressFieldProps } from './types';

import IcMapPoint from '@/assets/new-icons/lists/ic_map-point.svg';

import styles from './AddressField.module.scss';

const AddressField: FC<AddressFieldProps> = ({
  value,
  onSelectChange,
  name,
  promptColor = 'blue',
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [options, setOptions] = useState<TAddressInfo[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isOpenPopover, setIsOpenPopover] = useState(false);
  const [refAddress, setRefAddress] = useState<HTMLDivElement | null>(null);
  const debouncedValue = useDebounce(inputValue as string, 500);
  const provider = new OpenStreetMapProvider();

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // @ts-ignore
  const convertToSelectOptions = (array: SearchResult<RawResult>[]) => {
    return array.map((item) => {
      return {
        value: item.label,
        latitude: parseFloat(item.raw.lat),
        longitude: parseFloat(item.raw.lon),
      };
    });
  };

  const getOptions = async (address: string) => {
    setIsSearching(true);
    setOptions([]);

    if (address) {
      const results = await provider
        .search({
          query: address,
        })
        .catch((error) => {
          console.log(error);
          setIsSearching(false);
        });

      if (results) {
        setOptions(convertToSelectOptions(results));
      }
    }
    setIsSearching(false);
  };

  useEffect(() => {
    if (debouncedValue ?? isOpenPopover) {
      getOptions(debouncedValue as string);
    } else {
      setIsOpenPopover(false);
      setOptions([]);
      onSelectChange('', null, null);
    }
  }, [debouncedValue]);

  const onOptionClick = (item: TAddressInfo) => {
    if (onSelectChange)
      onSelectChange(item.value, item.latitude, item.longitude);
    setInputValue(item.value);
    setIsOpenPopover(false);
  };

  const onTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpenPopover(true);
    onSelectChange('', null, null);
  };

  const onBlur = () => {
    if (!value) setInputValue('');
  };

  return (
    <div className={styles.wrapper}>
      <TextField
        name={name}
        value={inputValue}
        onChange={onTextFieldChange}
        reference={setRefAddress}
        onBlur={onBlur}
        leftIcon={{ type: 'fill', icon: <IcMapPoint /> }}
        {...props}
      />

      <Popover
        className={styles.popover}
        isOpen={isOpenPopover}
        onClose={() => setIsOpenPopover(false)}
        refEl={refAddress}
      >
        <ul
          className={styles.list}
          style={{ width: refAddress?.offsetWidth || 0 }}
        >
          {isSearching ? (
            <li className={styles.item}>Поиск...</li>
          ) : !options.length ? (
            <li className={styles.item}>
              Ничего не найдено. Попробуйте ввести запрос снова
            </li>
          ) : (
            options.map((option) => (
              <li key={option.value}>
                <button
                  name={name}
                  value={option.value}
                  className={styles.item}
                  onClick={() => onOptionClick(option)}
                >
                  {option.value}
                </button>
              </li>
            ))
          )}
        </ul>
      </Popover>
    </div>
  );
};

export default AddressField;
