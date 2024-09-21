import { GroupBase, Props } from 'react-select';

import { IFieldWrapperProps } from '@/components/new-ui';

import { TPromptType } from '@/types/general/unions';

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
  typePrompt?: TPromptType;
}
