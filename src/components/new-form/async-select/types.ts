import { TSelectOption } from '@/types/general/unions';

export type TASelectProps = {
  type: TFetchType;
  name: string;
  selectValue: TSelectOption | null;
  onSelectChange: (value: TSelectOption | null) => void;
  className?: string;
  label?: string;
  placeholder?: string;
  idsList?: number[];
  id?: string;
  typePrompt?: any;
  optionsProp?: TSelectOption[];
  setOptionsProp?: (option: TSelectOption[] | []) => void;
};

export type TFetchType =
  | 'category'
  | 'course'
  | 'block'
  | 'specialities'
  | 'professional_qualities'
  | 'personal_qualities'
  | 'spheres'
  | 'championships'
  | 'software_products'
  | 'competencies'
  | 'cities'
  | 'island_spheres';
