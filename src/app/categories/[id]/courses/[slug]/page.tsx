'use client';

import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { Card } from '@/app/categories/[id]/courses/[slug]/_components/card/Card';

import { PageWrapper } from '@/components/new-layouts';
import { ButtonVariant, LinkBtn, SearchPanel } from '@/components/new-ui-kit';

import { useStore } from '@/hooks/useStore';

import { TCourse } from '@/types/entities/ICourse';

import { staticLinks } from '@/config/routingLinks';

import IcArrow from '@/assets/new-icons/general/ic_arrow-left.svg';

import styles from './styles.module.scss';

const Main: FC = observer(() => {
  const store = useStore();

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

  const course: TCourse = {
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
  };

  const router = useRouter();

  return (
    <PageWrapper mainStyles={styles.main}>
      <div className={styles.header}>
        <LinkBtn
          variant={ButtonVariant.INLINE}
          href={staticLinks.categories}
          icon={{ type: 'fill', icon: <IcArrow /> }}
        >
          Назад
        </LinkBtn>
        <h2>Курсы по направлению</h2>
      </div>
      <div className={styles.wrapper}>
        <SearchPanel placeholder={'Название курса'} />
        <div className={styles.list}>
          {courses.map((course) => (
            <Card course={course} key={course.slug} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
});
export default Main;
