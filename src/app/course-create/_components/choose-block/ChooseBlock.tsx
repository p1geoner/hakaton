import { useState } from 'react';

import { Block } from '@/app/course-create/_components/block/Block';
import { DividerBlock } from '@/app/course-create/_components/blocks/divider-block/DividerBlock';
import { ImageBlock } from '@/app/course-create/_components/blocks/image-block/ImageBlock';
import { TextBlock } from '@/app/course-create/_components/blocks/text-block/TextBlock';
import {
  TAllTypesField,
  typesField,
} from '@/app/course-create/_components/choose-block/config';

import { Chips } from '@/components/new-ui';
import { Button } from '@/components/new-ui-kit';

export const ChooseBlock = ({
  blocksData,
  onChange,
}: {
  blocksData: any[];
  onChange: any;
}) => {
  const [chosenType, setChosenType] = useState<TAllTypesField>('TEXT');
  const [isEditing, setIsEditing] = useState(true);

  const [image, setImage] = useState<File | null>(null);
  const [text, setText] = useState<string>('');

  const getBlockByType = (type: TAllTypesField) => {
    if (type === 'TEXT') {
      return (
        <TextBlock
          valueBlock={text}
          setValueBlock={setText}
          type={type}
          isEditing={isEditing}
        />
      );
    } else if (type === 'HEADERTEXT') {
      return (
        <TextBlock
          valueBlock={text}
          setValueBlock={setText}
          type={type}
          isEditing={isEditing}
        />
      );
    } else if (type === 'CODE') {
      return (
        <TextBlock
          valueBlock={text}
          setValueBlock={setText}
          type={type}
          isEditing={isEditing}
        />
      );
    } else if (type === 'QUOTETEXT') {
      return (
        <TextBlock
          valueBlock={text}
          setValueBlock={setText}
          type={type}
          isEditing={isEditing}
        />
      );
    } else if (type === 'ImageBlock') {
      return (
        <ImageBlock
          value={image}
          setValue={setImage}
          type={type}
          isEditing={isEditing}
        />
      );
    } else if (type === 'DividerBlock') {
      return <DividerBlock type={type} isEditing={isEditing} />;
    }
  };

  const onClick = () => {
    console.log(chosenType);
    const getType = (type: TAllTypesField) => {
      if (type === 'HEADERTEXT') {
        return { type_block: 'TextBlock', type: 'HEADERTEXT' };
      } else if (type === 'CODE') {
        return { type_block: 'TextBlock', type: 'CODE' };
      } else if (type === 'QUOTETEXT') {
        return { type_block: 'TextBlock', type: 'QUOTETEXT' };
      } else if (type === 'ImageBlock') {
        return { type_block: 'ImageBlock', type: null };
      } else if (type === 'DividerBlock') {
        return { type_block: 'DividerBlock', type: null };
      } else if (type === 'TEXT') {
        return { type_block: 'TextBlock', type: 'TEXT' };
      }
    };

    const getValue = (type: TAllTypesField) => {
      if (
        type === 'TEXT' ||
        type === 'QUOTETEXT' ||
        type === 'CODE' ||
        type === 'HEADERTEXT'
      ) {
        return { text: text };
      } else if (type === 'ImageBlock') {
        return { image: image };
      } else if (type === 'DividerBlock') {
        return { text: '' };
      }
    };

    const block = {
      position: blocksData.length + 1,
      type_block: getType(chosenType)?.type_block,
      type: getType(chosenType)?.type,
      ...getValue(chosenType),
    };

    console.log(block);

    console.log(...blocksData, block);
    onChange([...blocksData, block]);

    setImage(null);
    setText('');
  };

  return (
    <Block>
      <Chips
        onChange={(id) => setChosenType(id)}
        activeId={chosenType}
        skills={typesField}
      />
      {getBlockByType(chosenType)}
      <Button onClick={() => onClick()}>Добавить блок</Button>
    </Block>
  );
};
