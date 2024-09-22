export type FileUploadProps = {
  url?: string;
  onChange: (file: File) => void;
  onDelete?: () => void;
  extensions?: any;
  description?: string;
  label?: string;
  value?: File;
  wrapperClassname?: string;
  maxSize?: number;
  text?: string;
};
