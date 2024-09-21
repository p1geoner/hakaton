'use client';

import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';

import { useScreenDetector } from '@/hooks/useScreenDetector';

import { useParams } from '@/utils/queryFunctions';

import { IPaginationProps } from './types';

import IcArrowLeft from '@/assets/new-icons/lists/ic_double-arrow-left.svg';
import IcArrowRight from '@/assets/new-icons/lists/ic_double-arrow-right.svg';

import styles from './Pagination.module.scss';

export const Pagination: FC<IPaginationProps> = observer(
  ({ currentPage, lastPage, heightPosition }) => {
    const { setParams } = useParams();
    const { isMobile } = useScreenDetector();

    if (lastPage === 1 || lastPage === undefined) return null;

    const pages = [
      !isMobile && currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      (!isMobile || currentPage === 1) && currentPage + 3,
      !isMobile && currentPage + 4,
    ];
    const hasPreviousPage = currentPage - 1 > 0;
    const hasNextPage = currentPage + 1 <= lastPage;

    const navigatePage = (page: number) => {
      setParams('page', page.toString());
      window.scrollTo(0, heightPosition ?? 0);
    };
    const onFirstPage = () => navigatePage(1);
    const onLastPage = () => navigatePage(lastPage);

    const activeButtonClasses = (page: number) =>
      clsx(styles.button, {
        [styles.active]: page === currentPage,
      });

    return (
      <div className={styles.wrapper}>
        <button
          disabled={!hasPreviousPage}
          className={styles.buttonPrevious}
          onClick={onFirstPage}
        >
          <IcArrowLeft />
        </button>

        {pages.map((page) => {
          if (page < 1) return null;
          if (page > lastPage) return null;

          return (
            <button
              key={page}
              className={activeButtonClasses(page)}
              onClick={() => navigatePage(page)}
            >
              {page}
            </button>
          );
        })}

        <button
          disabled={!hasNextPage}
          className={styles.buttonNext}
          onClick={onLastPage}
        >
          <IcArrowRight />
        </button>
      </div>
    );
  }
);
