import Link from 'next/link';

import { ButtonVariant, LinkBtn } from '@/components/new-ui-kit';

import { TCourse } from '@/types/entities/ICourse';

import { dynamicLinks } from '@/config/routingLinks';

import IcSend from '@/assets/new-icons/general/ic_send.svg';

import styles from './styles.module.scss';

export const Card = ({ course }: { course: TCourse }) => {
  return (
    <Link href={dynamicLinks.course(course.slug)} className={styles.card}>
      <img src={course.cover} alt='' />
      <div className={styles.description}>
        <h3>{course.title}</h3>
        <div className={styles.aditionalInfo}>
          <p>{course.author.username}</p>
          <p>{course.count_lessons}</p>
        </div>
      </div>
      <LinkBtn
        variant={ButtonVariant.ROUNDED}
        className={styles.button}
        icon={{ type: 'fill', icon: <IcSend /> }}
        href={dynamicLinks.course(course.slug)}
      >
        Перейти
      </LinkBtn>
    </Link>
  );
};
