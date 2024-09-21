export interface IDatePickerProps {
  value: string;
  onChange: (date: string) => void;
  customDayClassName?: (config: TCustomDayClassNameConfig) => string;
  name?: string;
  label?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;

  minDate?: Date;
  maxDate?: Date;
}

export type TCustomDayClassNameConfig = {
  date: Date;
  classes: string[];
};
