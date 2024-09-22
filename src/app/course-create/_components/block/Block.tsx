import { ReactNode } from 'react';

import styles from './styles.module.scss';
export const Block = ({ children }: { children: ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
