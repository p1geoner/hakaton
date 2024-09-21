export interface IWysiwygProps {
  label?: string;
  name: string;
  value: string;
  formik: {
    setFieldValue: (name: any, state: any) => void;
  };
}
