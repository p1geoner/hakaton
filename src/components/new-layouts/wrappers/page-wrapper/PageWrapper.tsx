import clsx from 'clsx';
import { FC } from 'react';

import { IPageWrapper } from './types';

import styles from './styles.module.scss';

export const PageWrapper: FC<IPageWrapper> = ({
  meta,
  mainStyles,
  children,
}) => {
  return (
    <>
      <main className={clsx(mainStyles, styles.main)}>{children}</main>
    </>
  );
};
