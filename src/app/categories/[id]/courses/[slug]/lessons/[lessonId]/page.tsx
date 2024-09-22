'use client';

import { observer } from 'mobx-react-lite';
import { useParams, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import { Body } from '@/app/categories/[id]/courses/[slug]/_components/body/Body';
import { Header } from '@/app/categories/[id]/courses/[slug]/_components/header/Header';

import { PageWrapper } from '@/components/new-layouts';
import { ButtonVariant, LinkBtn } from '@/components/new-ui-kit';

import { useStore } from '@/hooks/useStore';

import CourseService from '@/API/rest/courses/CourseService';

import { TCourse, TCourseBlock } from '@/types/entities/ICourse';

import { staticLinks } from '@/config/routingLinks';

import IcArrow from '@/assets/new-icons/general/ic_arrow-left.svg';

import styles from './styles.module.scss';

const Main: FC = observer(() => {
  const { id, slug, lessonId } = useParams();
  const store = useStore();

  const [course, setCourse] = useState<TCourse>(null);
  const [courseBlocks, setCourseBlocks] = useState<TCourseBlock[]>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await CourseService.fetchCourseDesc(slug);
      const responseBlocks = await CourseService.fetchCourseBlocks(slug);
      if ('data' in response && 'data' in responseBlocks) {
        setCourse(response.data);
        setCourseBlocks(responseBlocks.data.blocks);
      }
    };
    getData();
  }, [id, slug]);

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

        {course && <Header course={course} />}
      </div>
      <div className={styles.wrapper}>
        {courseBlocks && <Body blocks={courseBlocks} />}
      </div>
    </PageWrapper>
  );
});
export default Main;
