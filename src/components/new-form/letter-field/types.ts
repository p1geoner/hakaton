export type LetterFieldProps = {
  value: string;
  onChange: (value: string) => void;
  name: string;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  wrapperClassname?: string;
};
