'use client';

import { observer } from 'mobx-react-lite';
import { useParams, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import { PageWrapper } from '@/components/new-layouts';
import { ButtonVariant, LinkBtn, SearchPanel } from '@/components/new-ui-kit';

import { useStore } from '@/hooks/useStore';

import CourseService, {
  GetLessonResponse,
} from '@/API/rest/courses/CourseService';

import { staticLinks } from '@/config/routingLinks';

import IcArrow from '@/assets/new-icons/general/ic_arrow-left.svg';

import styles from './styles.module.scss';

const Main: FC = observer(() => {
  const { id, slug, lessonId } = useParams();
  const store = useStore();

  const [lesson, setLessons] = useState<GetLessonResponse>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await CourseService.getLesson(lessonId);
      if ('data' in response) {
        setLessons(response.data);
      }
    };
    getData();
  }, [id, slug, lessonId]);

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
      </div>
      {lesson && (
        <div className={styles.wrapper}>
          <h2>{lesson.title}</h2>
          <SearchPanel placeholder={'Поиск по уроку'} />
        </div>
      )}
    </PageWrapper>
  );
});
export default Main;
