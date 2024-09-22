import { useState } from 'react';

import { Block } from '@/app/course-create/_components/block/Block';
import { TAllTypesField } from '@/app/course-create/_components/choose-block/config';

import { Button, ButtonTheme, TextArea } from '@/components/new-ui-kit';

export const TextBlock = ({
  valueBlock,
  setValueBlock,
  isEditing,
  type,
}: {
  valueBlock: string;
  setValueBlock: (value: string) => void;
  isEditing: boolean;
  type: TAllTypesField;
}) => {
  const [value, setValue] = useState(valueBlock || '');

  const onChange = (value: string) => {
    setValueBlock(value);
    setValue(value);
  };

  const getTitle = () => {
    if (type === 'TEXT') {
      return 'Блок с текстом';
    } else if (type === 'QUOTETEXT') {
      return 'Блок с пояснением';
    } else if (type === 'CODE') {
      return 'Блок с кодом';
    } else if (type === 'HEADERTEXT') {
      return 'Заголовок';
    }
  };

  return (
    <>
      {isEditing ? (
        <TextArea value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <Block>
          <TextArea
            label={getTitle()}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <Button theme={ButtonTheme.BLUE_OUTLINE}>Удалить</Button>
        </Block>
      )}
    </>
  );
};
