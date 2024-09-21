'use client';

import { useFormik } from 'formik';
import { usePathname, useSearchParams } from 'next/navigation';

import { Button, ButtonTheme } from '@/components/new-ui-kit';

import { setSearchParams } from '@/utils/setSearchParams';

import { globalFormikConfig } from '@/config/globalFormikConfig';

import styles from './SearchPanel.module.scss';

const SearchPanel = ({ placeholder }: { placeholder: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const formik = useFormik({
    ...globalFormikConfig,
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

  return (
    <form onSubmit={formik.handleSubmit} className={styles.searchPanel}>
      <input
        type='text'
        name='query'
        placeholder={placeholder}
        value={formik.values.query}
        onChange={formik.handleChange}
        className={styles.input}
      />

      <Button type='submit' theme={ButtonTheme.BLUE} className={styles.button}>
        Найти
      </Button>
    </form>
  );
};

export default SearchPanel;
