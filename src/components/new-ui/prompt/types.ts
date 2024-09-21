import { TPromptType } from '@/types/general/unions';

export type PromptProps = {
  type: TPromptType;
  color?: 'grey' | 'blue';
  className?: string;
};
