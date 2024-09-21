'use client';

import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';

import { IBreadcrumbsProps } from '@/components/new-ui/breadcrumbs/types';

import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = observer(({ items }: IBreadcrumbsProps) => {
  const getItemClasses = (index: number) =>
    clsx(styles.item, {
      [styles.lastItem]: index >= items.length - 1,
    });

  return (
    <ul className={styles.breadcrumbs}>
      {items.map((item, index) => (
        <>
          {index >= 1 && (
            <li key={index} className={getItemClasses(index)}>
              <span>•</span>
            </li>
          )}

          <li key={item.link + index} className={getItemClasses(index)}>
            {'link' in item ? (
              <Link href={item.link}>{item.title}</Link>
            ) : (
              <span>{item.title}</span>
            )}
          </li>
        </>
      ))}
    </ul>
  );
});
