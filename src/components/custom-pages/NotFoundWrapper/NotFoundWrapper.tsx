import { FC } from 'react';

import { PageWrapper } from '@/components/new-layouts';

import styles from './NotFoundWrapper.module.scss';

const NotFound: FC = () => {
  return (
    <PageWrapper mainStyles={styles.main}>
      <div className={styles.wrapper}>
        <span className={styles.top}>{'Страница не найдена'}</span>
        <h1 className={styles.title}>{'Упс! 404 ошибка'}</h1>
        <p className={styles.description}>
          {
            <>
              Запрашиваемая вами страница не найдена.
              <br />
              Возможно, вы ввели неверный адрес страницы...
            </>
          }
        </p>
      </div>
    </PageWrapper>
  );
};

export default NotFound;
