'use client';

import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { FC } from 'react';

import { PageWrapper } from '../index';

import { Loader } from '@/components/new-ui-kit';

import { IFormWrapper } from './types';

import IcBack from '@/assets/new-icons/general/ic_arrow-back.svg';

import styles from './FormWrapper.module.scss';

export const FormWrapper: FC<IFormWrapper> = observer(
  ({ meta, title, isLoading, children, backLink, className = '' }) => {
    const wrapperStyle = clsx({
      [styles.wrapper]: true,
      [styles.loader]: isLoading,
      [className]: !!className,
    });

    if (isLoading)
      return (
        <PageWrapper mainStyles={styles.main} meta={{ title: 'Загрузка...' }}>
          <div className={wrapperStyle}>
            <Loader />
          </div>
        </PageWrapper>
      );

    return (
      <div className={styles.main}>
        <div className={wrapperStyle}>
          <div className={styles.header}>
            <div className={styles.bottom}>
              <h1 className={styles.title}>{title}</h1>
              <Link href={backLink || '/'} className={styles.link}>
                <IcBack />
                Вернуться
              </Link>
            </div>
          </div>
          {children}
        </div>
      </div>
    );
  }
);
