import Link from 'next/link';

import { ButtonVariant, LinkBtn } from '@/components/new-ui-kit';

import { TCourse } from '@/types/entities/ICourse';

import { dynamicLinks } from '@/config/routingLinks';

import IcSend from '@/assets/new-icons/general/ic_send.svg';

import styles from './styles.module.scss';

export const Card = ({
  course,
  categoryId,
  isExternal = false,
}: {
  course: TCourse;
  categoryId?: string;
  isExternal: boolean;
}) => {
  return (
    <Link
      href={dynamicLinks.course({ categoryId: categoryId, slug: course.slug })}
      className={styles.card}
    >
      <img
        src={
          isExternal
            ? `${course.cover}`
            : `${process.env.NEXT_PUBLIC_BACKEND_URL}${course.cover}`
        }
        alt=''
      />
      <div className={styles.description}>
        <h3>{course.title}</h3>
        <div className={styles.aditionalInfo}>
          <p>{course.author.username}</p>
          <p>кол-во уроков: {course.count_lessons}</p>
        </div>
      </div>
      <LinkBtn
        variant={ButtonVariant.ROUNDED}
        className={styles.button}
        icon={{ type: 'fill', icon: <IcSend /> }}
        href={dynamicLinks.course({
          categoryId: categoryId,
          slug: course.slug,
        })}
      >
        Перейти
      </LinkBtn>
    </Link>
  );
};
