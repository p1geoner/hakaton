import { FormikProps } from 'formik';
import { useEffect } from 'react';

export const useFocusOnValidation = (formik: FormikProps<any>) => {
  useEffect(() => {
    if (!formik.isValid) {
      const firstError = document.querySelector('[data-form-error-validation]');
      firstError?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start',
      });
    }
  }, [formik.isValid, formik.submitCount, formik.isSubmitting]);
};
