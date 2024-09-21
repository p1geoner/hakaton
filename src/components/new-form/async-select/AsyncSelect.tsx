'use client';

import { FC, useEffect, useState } from 'react';

import { Select } from '@/components/new-ui-kit';

import useDebounce from '@/hooks/useDebounce';

import { TSelectOption, TSimpleEntity } from '@/types/general/unions';

import { AsyncSelectService } from '@/API';

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
    specialities: {
      get: (query: string) => AsyncSelectService.fetchSpecialities(query),
    },
    professional_qualities: {
      get: (query: string) =>
        AsyncSelectService.fetchProfessionalQualities(query),
    },
    personal_qualities: {
      get: (query: string) => AsyncSelectService.fetchPersonalQualities(query),
    },
    spheres: {
      get: id
        ? (query: string) =>
            AsyncSelectService.fetchCorporationsSpheres(id, query)
        : (query: string) => AsyncSelectService.fetchSpheres(query),
    },
    years: {
      get: (query: string) =>
        AsyncSelectService.fetchCorporationsYears(id, query),
    },
    championships: {
      get: (query: string) => AsyncSelectService.fetchChampionships(query),
    },
    software_products: {
      get: (query: string) => AsyncSelectService.fetchSoftwareProducts(query),
    },
    competencies: {
      get: (query: string) => AsyncSelectService.fetchCompetencies(query),
    },
    cities: {
      get: (query: string) => AsyncSelectService.fetchCities(query),
    },
    island_spheres: {
      get: (query: string) => AsyncSelectService.fetchIslandSpheres(query),
    },
  };

  const onInputChange = (event: string) => {
    setInputValue(event);
  };

  const convertToSelectOptions = (array: TSimpleEntity[]) => {
    return array.map((item) => {
      return { value: item.id, label: item.name };
    });
  };

  const getOptions = async (query: string) => {
    if (query) {
      const response = await fetchConfig[type].get(query);

      if ('data' in response) {
        const selectOptions = idsList
          ? // @ts-ignore-next-line
            response.data[type].filter(
              (option: TSimpleEntity) =>
                idsList?.findIndex((id) => id === option.id) === -1
            )
          : // @ts-ignore-next-line
            response.data[type];

        optionsProp
          ? setOptionsProp(convertToSelectOptions(selectOptions))
          : setOptions(convertToSelectOptions(selectOptions));
      }
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
      noOptionsMessage={noOptionsMessage}
      inputValue={inputValue}
      value={selectValue}
      onChange={onSelectChange}
      onInputChange={onInputChange}
      options={optionsProp ?? options}
      className={className}
      typePrompt={typePrompt}
    />
  );
};

export default ASelect;
