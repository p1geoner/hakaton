'use client';

import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

import { PageWrapper } from '@/components/new-layouts';
import { FormWrapper } from '@/components/new-layouts/wrappers/form-wrapper';
import {
  Button,
  ButtonTheme,
  LinkBtn,
  TextField,
} from '@/components/new-ui-kit';

import { useStore } from '@/hooks/useStore';

import { globalFormikConfig } from '@/config/globalFormikConfig';
import { staticLinks } from '@/config/routingLinks';

import styles from './styles.module.scss';

const RegistrationPage: FC = observer(() => {
  const store = useStore();
  const authStore = store.auth;

  const router = useRouter();

  const [isRequesting, setIsRequesting] = useState(false);

  const formik = useFormik({
    ...globalFormikConfig,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      const userFormData = new FormData();
      userFormData.set('username', values.username);
      userFormData.set('password', values.password);

      setIsRequesting(true);
      const response = await authStore.registration(userFormData);
      if (response.status === 200) {
        router.push(staticLinks.authorization);
      }
      setIsRequesting(false);

      authStore.setStatus(null);
    },
  });

  return (
    <PageWrapper mainStyles={styles.main}>
      <FormWrapper title={'Регистрация'}>
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
        <Button
          onClick={() => formik.handleSubmit()}
          className={styles.submitButton}
        >
          Войти в систему
        </Button>
        <LinkBtn
          theme={ButtonTheme.BLUE_OUTLINE}
          href={staticLinks.authorization}
          className={styles.submitButton}
        >
          Авторизация
        </LinkBtn>
      </FormWrapper>
    </PageWrapper>
  );
});
export default RegistrationPage;
