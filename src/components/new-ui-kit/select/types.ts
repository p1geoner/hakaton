import { GroupBase, Props } from 'react-select';

import { IFieldWrapperProps } from '@/components/new-ui';

export enum SelectTheme {
  DARK = 'dark',
  LIGHT = 'light',
}

export type TSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Props<Option, IsMulti, Group> & IBaseSelectProps;

export interface IBaseSelectProps extends IFieldWrapperProps {
  selectTheme?: SelectTheme;
  selectClassName?: string;
  icon?: any;
  typePrompt?: any;
}
