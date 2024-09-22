import { useEffect, useState } from 'react';

import { Block } from '@/app/course-create/_components/block/Block';
import { DividerBlock } from '@/app/course-create/_components/blocks/divider-block/DividerBlock';
import { ImageBlock } from '@/app/course-create/_components/blocks/image-block/ImageBlock';
import { TextBlock } from '@/app/course-create/_components/blocks/text-block/TextBlock';
import { ChooseBlock } from '@/app/course-create/_components/choose-block/ChooseBlock';

import { Button, TextField } from '@/components/new-ui-kit';

import CourseService from '@/API/rest/courses/CourseService';

export const CreateLesson = ({ blockId }: { blockId: number }) => {
  const [name, setName] = useState('');
  const [blocksData, setBlocksData] = useState([]);
  const [blocksView, setBlocksView] = useState([]);

  const getBlockByType = (block) => {
    if (block.type_block === 'TextBlock') {
      return (
        <TextBlock
          valueBlock={block.text}
          setValueBlock={() => null}
          type={block.type}
          isEditing={false}
        />
      );
    } else if (block.type_block === 'ImageBlock') {
      return (
        <ImageBlock value={block.image} type={block.type} isEditing={false} />
      );
    } else if (block.type_block === 'DividerBlock') {
      return <DividerBlock type={block.type} isEditing={false} />;
    }
  };

  useEffect(() => {
    setBlocksView(blocksData.map((block, index) => getBlockByType(block)));
  }, [blocksData]);

  const saveLesson = async () => {
    const formData = new FormData();
    blocksData.forEach((block, index) => {
      formData.set(`blocks_data[${index}][position]`, block.position);
      formData.set(`blocks_data[${index}][type]`, block.type);
      formData.set(`blocks_data[${index}][text]`, block.text);
      formData.set(`blocks_data[${index}][type_block]`, block.type_block);
      formData.set(`blocks_data[${index}][type_block]`, block.type_block);
      formData.set(`blocks_data[${index}][image]`, block.image);
    });
    formData.set('title', name);
    formData.set('block_id', blockId.toString());
    const response = CourseService.saveLesson(formData);
  };
  return (
    <>
      <Block>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label='Урок'
          placeholder={'Название урока'}
        />
      </Block>
      {blocksView}
      <ChooseBlock blocksData={blocksData} onChange={setBlocksData} />
      <Button onClick={() => saveLesson()}>Сохранить конспект</Button>
    </>
  );
};
