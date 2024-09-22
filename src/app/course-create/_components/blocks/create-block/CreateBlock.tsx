import { useFormik } from 'formik';

import { Block } from '@/app/course-create/_components/block/Block';

import AsyncSelect from '@/components/new-form/async-select/AsyncSelect';
import { Button, TextField } from '@/components/new-ui-kit';

import CourseService from '@/API/rest/courses/CourseService';

import { globalFormikConfig } from '@/config/globalFormikConfig';

export const CreateBlock = ({ block, setBlock, course, setBlockName }) => {
  const formik = useFormik({
    ...globalFormikConfig,
    initialValues: {
      blockName: '',
    },
    onSubmit: async (values) => {
      const courseFormData = new FormData();

      courseFormData.set('title', values.blockName);

      const response = await CourseService.createBlock(course, courseFormData);

      setBlockName(values.blockName);

      if ('data' in response) {
        setBlock(response.data.id);
      }
    },
  });

  const onChange = (option) => {
    setBlock(option.value);
    setBlockName(option.label);
  };

  return (
    <Block>
      <AsyncSelect
        type='block'
        label='Блок'
        name='block'
        placeholder='Выберите блок'
        id={course}
        onSelectChange={(option) => onChange(option)}
        selectValue={block}
      />
      <TextField
        label={'Урок в новом блоке?'}
        placeholder={'Название блока'}
        value={formik.values.blockName}
        onChange={(e) => formik.setFieldValue('blockName', e.target.value)}
      />
      <Button onClick={() => formik.handleSubmit()}>Создать курс</Button>
    </Block>
  );
};
