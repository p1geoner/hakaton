import { PropsWithChildren } from 'react';

import { IBlockProps } from './types';

import styles from './Block.module.scss';

export const Block = ({
  id,
  title,
  description,
  children,
}: PropsWithChildren<IBlockProps>) => {
  return (
    <section className={styles.block} id={id}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      {children}
    </section>
  );
};
