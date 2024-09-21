import clsx from 'clsx';
import parse from 'html-react-parser';

import { TPlugProps } from './types';

import styles from './Plug.module.scss';
export const Plug = ({ className = '', textData, icon }: TPlugProps) => {
  const plugClasses = clsx(styles.plug, className);

  return (
    <li className={plugClasses}>
      <div className={styles.content}>
        {icon && <p>{icon}</p>}
        <h1 className={styles.title}>{parse(textData.title)}</h1>
        {textData.text ? (
          <p className={styles.subTitle}>{textData.text}</p>
        ) : (
          <p className={styles.subTitle}>{parse(textData.description)}</p>
        )}
      </div>
    </li>
  );
};
