import { FC } from 'react';

import { TInfoListProps } from './types';

import styles from './InfoList.module.scss';

export const InfoList: FC<TInfoListProps> = ({ items, isShort }) => {
  return (
    <ul className={styles.info}>
      {items.map((item) => {
        return (
          item.body && (
            <li
              className={isShort ? styles.itemBigger : styles.item}
              key={item.title}
            >
              <span className={styles.left}>{item.title}</span>
              <div className={styles.right}>{item.body}</div>
            </li>
          )
        );
      })}
    </ul>
  );
};
