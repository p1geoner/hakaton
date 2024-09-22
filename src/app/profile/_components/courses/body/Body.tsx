import { useEffect, useState } from 'react';

import { MapField } from '@/app/profile/_components/graph';

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
} from '@/components/new-ui-kit';

import CourseService from '@/API/rest/courses/CourseService';

import { TCourse } from '@/types/entities/ICourse';

import styles from './styles.module.scss';

export const Body = ({ blocks }: { blocks: TCourse[] }) => {
  const [tree, setTree] = useState(null);
  const [index, setIndex] = useState(0);

  const getData = async (block) => {
    setIndex(block.id);
    const response = await CourseService.getTree(block.slug);

    if ('data' in response) {
      // @ts-ignore
      setTree(response.data);
    }
  };

  useEffect(() => {
    console.log(tree);
  }, [tree]);

  return (
    <div className={styles.accordionsList}>
      {blocks?.map((block, blockIndex) => (
        <Accordion key={blockIndex}>
          <AccordionHeader>
            <div onClick={() => getData(block)} className={styles.header}>
              <h4 className={styles.blockTitle}>
                {blockIndex + 1}
                {block.title}
              </h4>
            </div>
          </AccordionHeader>
          <AccordionContent isOpen={index === block.id}>
            {tree !== null && <MapField node={tree} />}
          </AccordionContent>
          {/* {index === block.id ? (*/}
          {/*  <AccordionContent isOpen={index === block.id}>*/}
          {/*    {tree !== null && <MapField node={tree} />}*/}
          {/*  </AccordionContent>*/}
          {/* ) : (*/}
          {/*  <AccordionContent></AccordionContent>*/}
          {/* )}*/}
        </Accordion>
      ))}
    </div>
  );
};
