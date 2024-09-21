'use client';

import clsx from 'clsx';
import { useFormik } from 'formik';
import { usePathname, useSearchParams } from 'next/navigation';
import { FC } from 'react';

import { setSearchParams } from '@/utils/setSearchParams';

import { ISearchProps } from './types';

import IcSearch from '@/assets/icons/forms/ic_search.svg';
import IcClear from '@/assets/new-icons/general/ic_close.svg';

import styles from './NewSearch.module.scss';

const NewSearch: FC<ISearchProps> = ({
  className,
  placeholder,
  onClose,
  isVisible,
  onFocus,
  onBlur,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const formik = useFormik({
    initialValues: {
      query: searchParams.get('query') ?? '',
    },
    onSubmit: (values) => {
      const newParams = new URLSearchParams(searchParams.toString());

      const startStateSearchParams = {};
      newParams.forEach((value, key) => (startStateSearchParams[key] = value));

      if (values.query) newParams.set('query', values.query);
      else newParams.delete('query');

      newParams.delete('page');

      const finishStateSearchParams = {};
      newParams.forEach((value, key) => (finishStateSearchParams[key] = value));

      if (
        JSON.stringify(startStateSearchParams) !==
        JSON.stringify(finishStateSearchParams)
      ) {
        setSearchParams(pathname, newParams.toString());
      }
    },
  });

  const onClear = () => {
    formik.setFieldValue('query', '');
    formik.handleSubmit();
  };

  return (
    <form
      className={clsx(styles.container, className)}
      onSubmit={formik.handleSubmit}
    >
      <div className={styles.search}>
        <input
          autoComplete={'off'}
          type='text'
          name='query'
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder ?? 'Поиск'}
          value={formik.values.query}
          onChange={formik.handleChange}
        />
        <button onClick={onFocus} type='submit'>
          <IcSearch />
        </button>
      </div>
      {formik.values.query && (
        <button className={styles.buttonWhite} onClick={onClear} type='reset'>
          <IcClear />
        </button>
      )}
    </form>
  );
};

export default NewSearch;
