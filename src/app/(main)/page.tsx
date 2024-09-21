'use client';

import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { FC } from 'react';

import { Card } from '@/app/categories/[id]/courses/[slug]/_components/card/Card';

import { PageWrapper } from '@/components/new-layouts';

import { useStore } from '@/hooks/useStore';

import IcIntro from '@/assets/new-icons/general/ic_main.svg';

import styles from './styles.module.scss';

const Main: FC = observer(() => {
  const store = useStore();
  const partners = [
    {
      src: 'https://dzen.ru/about',
      image: '',
    },
  ];
  const courses = [
    {
      title: 'dasdas dasd a',
      id: 1,
      slug: 'sdsdsdsd-sdadaa',
      cover:
        'https://bim-portal.ru/wp-content/uploads/2023/05/daf255b6b80a-min-1024x768.jpg',
      count_lessons: 15,
      author: {
        id: 2,
        username: 'Dmitriy',
      },
    },
    {
      title: 'dasdas dasd a',
      id: 1,
      slug: 'sdsdsdsd-sdadaa',
      cover:
        'https://bim-portal.ru/wp-content/uploads/2023/05/daf255b6b80a-min-1024x768.jpg',
      count_lessons: 15,
      author: {
        id: 2,
        username: 'Dmitriy',
      },
    },
    {
      title: 'dasdas dasd a',
      id: 1,
      slug: 'sdsdsdsd-sdadaa',
      cover:
        'https://bim-portal.ru/wp-content/uploads/2023/05/daf255b6b80a-min-1024x768.jpg',
      count_lessons: 15,
      author: {
        id: 2,
        username: 'Dmitriy',
      },
    },
  ];
  return (
    <PageWrapper mainStyles={styles.main}>
      <div className={styles.block}>
        <div className={styles.intro}>
          <div className={styles.title}>
            <h2>Hайди себя и новую профессию в ПроСкилл</h2>
            <h4>Освой новую специальность </h4>
          </div>
          <div className={styles.icon}>
            <IcIntro />
          </div>
        </div>
      </div>
      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Популярные курсы:</h3>
        <div className={styles.list}>
          {courses.map((course) => (
            <Card course={course} key={course.slug} />
          ))}
        </div>
      </div>
      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Популярные курсы:</h3>
        <div className={styles.list}>
          {partners.map((partner) => (
            <Link href={partner.src} className={styles.partner}>
              <img src={partner.image} alt='' />
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
});
export default Main;
