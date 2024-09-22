'use client';

import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

import { Block } from '@/app/course-create/_components/block/Block';
import { CreateBlock } from '@/app/course-create/_components/blocks/create-block/CreateBlock';
import { CreateCourse } from '@/app/course-create/_components/blocks/create-course/CreateCourse';
import { CreateLesson } from '@/app/course-create/_components/create-lesson/CreateLesson';

import AsyncSelect from '@/components/new-form/async-select/AsyncSelect';
import { PageWrapper } from '@/components/new-layouts';

import { useStore } from '@/hooks/useStore';

import styles from './styles.module.scss';

const ProfilePage: FC = observer(() => {
  const store = useStore();
  const authStore = store.auth;

  const [category, setCategory] = useState(null);
  const [course, setCourse] = useState(null);
  const [courseId, setCourseId] = useState(null);
  const [block, setBlock] = useState(null);
  const [blockId, setBlockId] = useState(null);

  const user = authStore.user;

  const router = useRouter();

  const onCategoryChange = (value) => {
    setCategory(value);
    setCourseId(null);
    setCourse(null);
    setBlockId(null);
    setBlock(null);
  };

  return (
    <PageWrapper mainStyles={styles.main}>
      <div className={styles.form}>
        <Block>
          <AsyncSelect
            type='category'
            label='Категория'
            name='category'
            placeholder='Выберите категорию'
            onSelectChange={(option) => onCategoryChange(option.value)}
            selectValue={category}
          />
        </Block>
        {category && !courseId && (
          <CreateCourse
            setCourseName={setCourse}
            setCourse={setCourseId}
            course={courseId}
            category={category}
          />
        )}
        {course && <h3>{course}</h3>}
        {courseId && !blockId && (
          <CreateBlock
            setBlockName={setBlock}
            setBlock={setBlockId}
            course={courseId}
            block={block}
          />
        )}
        {block && <h3>{block}</h3>}
        {block && <CreateLesson blockId={blockId} />}
      </div>
    </PageWrapper>
  );
});
export default ProfilePage;
