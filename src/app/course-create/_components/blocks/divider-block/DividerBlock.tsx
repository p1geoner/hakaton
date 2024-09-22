import { useState } from 'react';

import { Block } from '@/app/course-create/_components/block/Block';
import { TAllTypesField } from '@/app/course-create/_components/choose-block/config';

import { Button, ButtonTheme, ButtonVariant } from '@/components/new-ui-kit';

import styles from './styles.module.scss';

export const DividerBlock = ({
  isEditing,
  type,
}: {
  isEditing: boolean;
  type: TAllTypesField;
}) => {
  const [value, setValue] = useState('');

  return (
    <>
      {isEditing ? (
        <div className={styles.line}>
          <Button variant={ButtonVariant.ROUNDED}>Разделительная черта</Button>{' '}
        </div>
      ) : (
        <Block>
          <div className={styles.line}>
            <Button variant={ButtonVariant.ROUNDED}>
              Разделительная черта
            </Button>{' '}
            <Button theme={ButtonTheme.BLUE_OUTLINE}>Удалить</Button>{' '}
          </div>
        </Block>
      )}
    </>
  );
};
