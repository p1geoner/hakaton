import { TextFieldProps } from '@/components/UI-kit/TextFields/types';

export interface AddressFieldProps extends Omit<TextFieldProps, 'onChange'> {
  onSelectChange: (
    value: string,
    lat: number | null,
    lng: number | null
  ) => void;
  promptColor?: 'grey' | 'blue'
}
