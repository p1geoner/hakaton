'use client';

import { FC, useEffect, useState } from 'react';

import { Select } from '@/components/new-ui-kit';

import useDebounce from '@/hooks/useDebounce';

import CourseService from '@/API/rest/courses/CourseService';

import { TSelectOption, TSimpleEntity } from '@/types/general/unions';

import { TASelectProps } from './types';

export const ASelect: FC<TASelectProps> = ({
  type,
  name,
  label,
  className,
  onSelectChange,
  selectValue,
  placeholder,
  idsList,
  id = null,
  typePrompt,
  optionsProp,
  setOptionsProp,
}) => {
  const [options, setOptions] = useState<TSelectOption[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isSearching, setIsSearching] = useState(false);
  const debouncedValue = useDebounce(inputValue, 500);
  const fetchConfig = {
    category: {
      get: () => CourseService.getCategories(),
    },
    course: {
      get: () => CourseService.getCourses(id),
    },
    block: {
      get: () => CourseService.getBlocks(id),
    },
  };

  const onInputChange = (event: string) => {
    setInputValue(event);
  };

  const convertToSelectOptions = (array: TSimpleEntity[]) => {
    if (type === 'course') {
      return array?.map((item) => {
        // @ts-ignore
        return { value: item.slug, label: item.title };
      });
    } else {
      return array?.map((item) => {
        return { value: item.id, label: item.title };
      });
    }
  };

  const getOptions = async (query: string) => {
    const response = await fetchConfig[type].get(query);

    if ('data' in response) {
      const selectOptions = idsList
        ? // @ts-ignore-next-line
          response.data.filter(
            (option: TSimpleEntity) =>
              idsList?.findIndex((id) => id === option.id) === -1
          )
        : // @ts-ignore-next-line
          response.data;

      optionsProp
        ? setOptionsProp(convertToSelectOptions(selectOptions))
        : setOptions(convertToSelectOptions(selectOptions));
    }

    setIsSearching(false);
  };

  useEffect(() => {
    if (debouncedValue) {
      setIsSearching(true);
      getOptions(debouncedValue as string);
    } else {
      if (!optionsProp) setOptions([]);
    }
  }, [debouncedValue]);

  const noOptionsMessage = () =>
    isSearching ? 'Поиск...' : 'Введите новый запрос';

  return (
    <Select
      placeholder={placeholder || 'Введите запрос'}
      name={name}
      label={label}
      isSearchable={false}
      noOptionsMessage={noOptionsMessage}
      inputValue={inputValue}
      value={
        options.find(
          (option) => option.value?.toString() === selectValue?.toString()
        ) || null
      }
      onFocus={() => getOptions(debouncedValue as string)}
      onChange={onSelectChange}
      options={optionsProp ?? options}
      className={className}
      typePrompt={typePrompt}
    />
  );
};

export default ASelect;
