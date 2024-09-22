import { useFormik } from 'formik';

import { Block } from '@/app/course-create/_components/block/Block';

import AsyncSelect from '@/components/new-form/async-select/AsyncSelect';
import { FileField } from '@/components/new-ui/file/File';
import { Button, TextArea, TextField } from '@/components/new-ui-kit';

import CourseService from '@/API/rest/courses/CourseService';

import { globalFormikConfig } from '@/config/globalFormikConfig';

export const CreateCourse = ({
  course,
  setCourse,
  category,
  setCourseName,
}) => {
  const formik = useFormik({
    ...globalFormikConfig,
    initialValues: {
      courseName: '',
      courseImage: '',
      courseDescription: '',
    },
    onSubmit: async (values) => {
      const courseFormData = new FormData();

      courseFormData.set('title', values.courseName);
      courseFormData.set('description', values.courseDescription);
      courseFormData.set('cover', values.courseImage);

      const response = await CourseService.createCourse(
        category,
        courseFormData
      );

      setCourseName(values.courseName);

      if ('data' in response) {
        setCourse(response.data.slug);
      }
    },
  });

  const onChange = (option) => {
    setCourse(option.value);
    setCourseName(option.label);
  };

  return (
    <Block>
      <AsyncSelect
        type='course'
        label='Курс'
        name='course'
        placeholder='Выберите курс'
        id={category}
        onSelectChange={(option) => onChange(option)}
        selectValue={course}
      />
      <TextField
        label={'Нет подходящего курса в списке?'}
        placeholder={'Название курса'}
        value={formik.values.courseName}
        onChange={(e) => formik.setFieldValue('courseName', e.target.value)}
      />
      <FileField
        onChange={(file) => formik.setFieldValue('courseImage', file)}
        onDelete={() => formik.setFieldValue('courseImage', '')}
      />
      <TextArea
        value={formik.values.courseDescription}
        onChange={(e) =>
          formik.setFieldValue('courseDescription', e.target.value)
        }
      />
      <Button onClick={() => formik.handleSubmit()}>Создать курс</Button>
    </Block>
  );
};
