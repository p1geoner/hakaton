'use client';

import clsx from 'clsx';
import { FC, useState } from 'react';

import { Popover } from '@/components/new-ui-kit';

import { promptData } from '@/data/prompt';

import { PromptProps } from './types';

import IcClose from '@/assets/new-icons/general/ic_close.svg';
import IcInfo from '@/assets/new-icons/general/ic_info_grey.svg';

import styles from './Prompt.module.scss';

export const Prompt: FC<PromptProps> = ({
  type,
  color = 'grey',
  className = '',
}) => {
  const [promptOpen, setPromptOpen] = useState(false);
  const [refIcon, setRefIcon] = useState<HTMLDivElement | null>(null);

  const title = promptData[type].title;
  const description = promptData[type].description;

  const onClose = () => setPromptOpen(false);

  const iconClasses = clsx(styles.icon, {
    [styles.grey]: color === 'grey',
    [styles.blue]: color === 'blue',
    [className]: !!className,
  });

  return (
    <>
      <div ref={setRefIcon} className={styles.iconWrapper}>
        <IcInfo onClick={() => setPromptOpen(true)} className={iconClasses} />
      </div>

      <Popover
        isOpen={promptOpen}
        refEl={refIcon}
        onClose={() => setPromptOpen(false)}
        className={styles.popover}
        offset={[0, 10]}
      >
        <div className={styles.header}>
          <h6 className={styles.title}>{title}</h6>
          <IcClose onClick={onClose} />
        </div>

        <p className={styles.description}>{description}</p>
      </Popover>
    </>
  );
};
