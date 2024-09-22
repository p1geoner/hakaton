export type FileUploadProps = {
  url?: string;
  onChange: (file: File) => void;
  onDelete?: () => void;
  extensions?: any;
  description?: string;
  label?: string;
  wrapperClassname?: string;
  maxSize?: number;
  text?: string;
};
