import clsx from 'clsx';
import { FC } from 'react';

import { IBlock } from './types';

import styles from './Block.module.scss';

export const Block: FC<IBlock> = ({
  title,
  children,
  className = '',
  titleBold,
}) => {
  const titleStyles = clsx({
    [styles.title]: true,
    [styles.titleBold]: titleBold,
  });

  return (
    <div className={clsx(styles.block, className)}>
      {title && <h3 className={titleStyles}>{title}</h3>}
      {children}
    </div>
  );
};
