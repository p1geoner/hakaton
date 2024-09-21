import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';

export function handleCheckboxes<FormikType>(
  e: ChangeEvent<HTMLInputElement>,
  formikField: string,
  formik: FormikProps<FormikType>
) {
  const { checked, id } = e.target;

  if (checked) {
    formik.setFieldValue(formikField, [...formik.values[formikField], id]);
  } else {
    formik.setFieldValue(
      formikField,
      formik.values[formikField].filter((value: string) => value !== id)
    );
  }
}
