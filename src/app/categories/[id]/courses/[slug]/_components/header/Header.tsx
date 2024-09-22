import { TCourse } from '@/types/entities/ICourse';

import styles from './styles.module.scss';

export const Header = ({ course }: { course: TCourse }) => {
  return (
    <div className={styles.description}>
      <div className={styles.text}>
        <div className={styles.title}>
          <h2>{course.title}</h2>
          <p>
            Автор курса: <span>{course.author.username}</span>
          </p>
        </div>
        <p>{course.description}</p>
      </div>
      <img
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${course.cover}`}
        alt=''
      />
    </div>
  );
};
