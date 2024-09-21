'use client';

import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import { PageWrapper } from '@/components/new-layouts';
import { Chips } from '@/components/new-ui';
import { ButtonVariant, LinkBtn } from '@/components/new-ui-kit';

import { useStore } from '@/hooks/useStore';

import CourseService, {
  GetCategoriesResponse,
  TSubCategory,
} from '@/API/rest/courses/CourseService';

import { dynamicLinks, staticLinks } from '@/config/routingLinks';

import IcArrow from '@/assets/new-icons/general/ic_arrow-left.svg';

import styles from './styles.module.scss';

const Main: FC = observer(() => {
  const store = useStore();

  const router = useRouter();

  const [categories, setCategories] = useState<GetCategoriesResponse>([]);
  const [pickedCategory, setPickedCategory] = useState(null);
  const [subCategories, setSubCategories] = useState<TSubCategory[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await CourseService.fetchCategories();
      if ('data' in response) {
        setCategories(response.data);
      }
    };
    getData();
  }, [router]);

  const onChange = (id) => {
    setPickedCategory(id);
  };

  useEffect(() => {
    if (pickedCategory !== null) {
      setSubCategories(
        categories.find((category) => category.id === pickedCategory).categories
      );
    }
  }, [pickedCategory]);

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
      <div className={styles.intro}>
        <div className={styles.title}>
          <h2>Выберите любимые направления</h2>
          <h4>Это поможет рекомендовать более точные и интересные курсы</h4>
        </div>
        <div className={styles.chips}>
          <Chips
            className={styles.chips}
            activeId={pickedCategory}
            skills={categories}
            onChange={onChange}
          />
        </div>
      </div>

      <div className={styles.block}>
        <h2>Категории по направлению:</h2>
        <div className={styles.list}>
          {subCategories.map((category) => (
            <Link href={dynamicLinks.category(category.id.toString())}>
              <h3>{category.title}</h3>
              <div className={styles.image}>
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.image}`}
                  alt=''
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
});
export default Main;
