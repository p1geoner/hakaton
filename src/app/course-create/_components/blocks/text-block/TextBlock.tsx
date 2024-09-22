import { useState } from 'react';

import { Block } from '@/app/course-create/_components/block/Block';

import { TextArea } from '@/components/new-ui-kit';

export const TextBlock = ({}) => {
  const [value, setValue] = useState('');

  return (
    <Block>
      <TextArea value={value} onChange={(e) => setValue(e.target.value)} />
    </Block>
  );
};
