export type RadioButtonGroupProps = {
  label?: string;
  name: string;
  formikSetter: (value: string) => void;
  formikValue: string | null;
  buttonsConfig: TButtonGroupConfig[];
  containerClass?: string;
};

export type TButtonGroupConfig = {
  label: string;
  value: string | null;
  disabled?: boolean;
};
