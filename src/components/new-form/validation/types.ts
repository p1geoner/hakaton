import { FormikErrors } from 'formik';

import { TSpeciality } from '@/types/entities/IResume';
import { TSelectOption } from '@/types/general/unions';

export interface IValidationProps {
  error?:
    | FormikErrors<TSelectOption>
    | FormikErrors<TSpeciality>[]
    | FormikErrors<File>
    | string
    | string[]
    | null;
}
