'use client';

import clsx from 'clsx';
import { useFormik } from 'formik';
import { usePathname, useSearchParams } from 'next/navigation';
import { FC } from 'react';

import {
  Button,
  ButtonTheme,
  ButtonVariant,
  TextField,
} from '@/components/new-ui-kit';

import { setSearchParams } from '@/utils/setSearchParams';

import { ISearchProps } from './types';

import styles from './Search.module.scss';

export const Search: FC<ISearchProps> = ({ className, placeholder }) => {
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
        <TextField
          value={formik.values.query}
          onChange={(e) => formik.setFieldValue('query', e.target.value)}
          className={styles.input}
          placeholder={placeholder}
        />
      </div>

      <Button
        theme={ButtonTheme.BLUE}
        variant={ButtonVariant.SQUARE}
        className={styles.find}
        type={'submit'}
      >
        Найти
      </Button>
    </form>
  );
};
