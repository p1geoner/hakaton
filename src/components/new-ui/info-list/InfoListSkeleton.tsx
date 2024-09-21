import { FC } from 'react';

import styles from './InfoList.module.scss';

const InfoListSkeleton: FC = () => {
  return (
    <ul className={styles.infoSkeleton}>
      <li className={styles.item}>
        <span className={styles.left}></span>
        <span className={styles.right}></span>
      </li>

      <li className={styles.item}>
        <span className={styles.left}></span>
        <span className={styles.right}></span>
      </li>

      <li className={styles.item}>
        <span className={styles.left}></span>
        <span className={styles.right}></span>
      </li>

      <li className={styles.item}>
        <span className={styles.left}></span>
        <span className={styles.right}></span>
      </li>
    </ul>
  );
};

export default InfoListSkeleton;
