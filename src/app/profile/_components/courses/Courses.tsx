import { useEffect, useState } from 'react';

import { Body } from '@/app/profile/_components/courses/body/Body';

import { Chips } from '@/components/new-ui';

import CourseService, {
  GetUserCategory,
} from '@/API/rest/courses/CourseService';

import { TCourse } from '@/types/entities/ICourse';

import styles from './styles.module.scss';
export const Course = () => {
  const [categories, setCategories] = useState<GetUserCategory>([]);

  const [pickedId, setPickedId] = useState(null);

  const [courses, setCourses] = useState<TCourse[]>([]);

  useEffect(() => {
    const getData = async () => {
      const responseCategories = await CourseService.getUserCategories();
      if ('data' in responseCategories) {
        setCategories(responseCategories.data);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    setCourses(
      categories.find((category) => category.id === pickedId)?.courses
    );
  }, [pickedId]);

  return (
    <div className={styles.wrapper}>
      <h3>Программа прохождения курсов</h3>
      <Chips
        skills={categories}
        onChange={(id) => setPickedId(id)}
        activeId={pickedId}
      />
      <Body blocks={courses} />
    </div>
  );
};
