import clsx from 'clsx';
import { useParams } from 'next/navigation';

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  ButtonVariant,
  LinkBtn,
} from '@/components/new-ui-kit';

import { TCourseBlock } from '@/types/entities/ICourse';

import { dynamicLinks } from '@/config/routingLinks';

import styles from './styles.module.scss';

export const Body = ({ blocks }: { blocks: TCourseBlock[] }) => {
  const { id, slug } = useParams();
  return (
    <div className={styles.accordionsList}>
      {blocks.map((block, blockIndex) => (
        <Accordion key={blockIndex}>
          <AccordionHeader>
            <div className={styles.header}>
              <h4 className={styles.blockTitle}>
                {blockIndex + 1}. {block.title}
              </h4>
              {block.is_finished && <p>Раздел пройден</p>}
            </div>
          </AccordionHeader>

          <AccordionContent>
            <ul className={styles.blockRows}>
              {block.lessons.map((lesson, lessonIndex) => (
                <LinkBtn
                  href={dynamicLinks.lesson({
                    categoryId: id,
                    slug: slug,
                    id: lesson.id,
                  })}
                  variant={ButtonVariant.INLINE}
                  className={clsx({ [styles.complete]: lesson.is_finished })}
                >
                  {blockIndex + 1}.{lessonIndex + 1}
                  {lesson.title}
                </LinkBtn>
              ))}
            </ul>
          </AccordionContent>
        </Accordion>
      ))}
    </div>
  );
};
