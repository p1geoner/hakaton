'use client';

import clsx from 'clsx';
import { FC } from 'react';

import { Button, ButtonTheme, ButtonVariant } from '@/components/new-ui-kit';

import { ChipsProps } from './types';

import styles from './Chips.module.scss';

export const Chips: FC<ChipsProps> = ({
  skills,
  type,
  onDelete,
  activeId,
  onChange,
  className = '',
}) => {
  const skillsClasses = clsx({
    [styles.list]: true,
    [className]: true,
  });

  const skillClasses = clsx(styles.item, {
    [styles.itemAdd]: type === 'add',
  });

  if (!skills || skills.length === 0) return null;

  return (
    <ul className={skillsClasses}>
      {skills?.map((skill, index) => {
        if (skill) {
          return (
            <li className={skillClasses} key={index}>
              <Button
                variant={ButtonVariant.ROUNDED}
                theme={
                  activeId === skill.id
                    ? ButtonTheme.BLUE
                    : ButtonTheme.BLUE_OUTLINE
                }
                onClick={() => onChange(skill.id)}
              >
                {skill.title}
              </Button>
            </li>
          );
        }
      })}
    </ul>
  );
};
