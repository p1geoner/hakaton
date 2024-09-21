'use client';

import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { PageWrapper } from '../index';

import { Breadcrumbs } from '@/components/new-ui';
import { Loader } from '@/components/new-ui-kit';

import { useStore } from '@/hooks/useStore';

import { staticLinks } from '@/config/routingLinks';

import { IFormWrapper } from './types';

import IcBack from '@/assets/new-icons/general/ic_arrow-back.svg';

import styles from './FormWrapper.module.scss';

export const FormWrapper: FC<IFormWrapper> = observer(
  ({
    meta,
    title,
    isLoading,
    children,
    backLink = staticLinks.applicantMain,
    className = '',
  }) => {
    const store = useStore();

    const employerName = store?.account?.employerStore?.profile?.employerName;

    const pathname = usePathname();

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

    const breadCrumbItems = {
      [staticLinks.resumes]: [
        { title: 'Главная', link: staticLinks.employerMain },
        { title: 'Предприятия', link: staticLinks.employerProfiles },
        { title: '' },
      ],
    };

    return (
      <div className={styles.main}>
        <div className={wrapperStyle}>
          <div className={styles.header}>
            {breadCrumbItems[`${pathname.split('/')[1]}`] && (
              <Breadcrumbs
                items={breadCrumbItems[`${pathname.split('/')[1]}`]}
              />
            )}
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
