'use client';

import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';
import { FC, useState } from 'react';

import { AsyncButton } from '@/components/new-form';
import { PageWrapper } from '@/components/new-layouts';
import { FormWrapper } from '@/components/new-layouts/wrappers/form-wrapper';
import { TextField } from '@/components/new-ui-kit';

import { useStore } from '@/hooks/useStore';

import { globalFormikConfig } from '@/config/globalFormikConfig';

import styles from './styles.module.scss';

const AuthorizationPage: FC = observer(() => {
  const store = useStore();
  const authStore = store.auth;

  const [isRequesting, setIsRequesting] = useState(false);

  const formik = useFormik({
    ...globalFormikConfig,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      const user = {
        username: values.username,
        password: values.password,
      };

      setIsRequesting(true);
      const response = await authStore.authorization(user);
      setIsRequesting(false);

      authStore.setStatus(null);
    },
  });

  return (
    <PageWrapper mainStyles={styles.main}>
      <FormWrapper title={'Авторизация'}>
        <TextField
          name='username'
          label='Имя пользователя'
          value={formik.values.username}
          onChange={formik.handleChange}
          placeholder=' '
        />
        <TextField
          name='password'
          label='Пароль'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder=' '
        />
        <AsyncButton
          isLoading={isRequesting}
          type='submit'
          className={styles.submitButton}
        >
          Войти в систему
        </AsyncButton>
      </FormWrapper>
    </PageWrapper>
  );
});
export default AuthorizationPage;
