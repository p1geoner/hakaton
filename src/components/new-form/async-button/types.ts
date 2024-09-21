import { TButtonProps } from '@/components/new-ui-kit';

export type IAsyncButtonProps = TButtonProps & {
  isLoading: boolean;
  theme?: never;
};
