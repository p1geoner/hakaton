import React from 'react';

import { ValidationProps } from '@/components/Form/Validation/types';

export interface IFieldWithValidationProps extends ValidationProps {
  children: React.ReactNode;
  wrapperClassName?: string;
  validationClassName?: string;
}
