import clsx from 'clsx';
import { ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react';

import { FileUploadProps } from './types';

import IcUpload from '@/assets/icons/forms/ic_upload.svg';
import IcFile from '@/assets/new-icons/forms/ic_image.svg';
import IcClose from '@/assets/new-icons/general/ic_close.svg';

import styles from './styles.module.scss';

export const FileField: FC<FileUploadProps> = ({
  url,
  onChange,
  onDelete,
  extensions,
  description,
  label,
  value,
  wrapperClassname = '',
  maxSize = 10_485_760,
  text,
}) => {
  const [file, setFile] = useState<null | File>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(url ?? null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setFile(value);
    setFileUrl(
      currentFileName && currentFileName.length > 20
        ? currentFileName.slice(0, 20) +
            '...' +
            currentFileName.slice(currentFileName.lastIndexOf('.'))
        : currentFileName
    );
  }, [value]);

  const checkFileSize = (file: File) => {
    if (file.size > maxSize) {
      setErrorMessage('Файл слишком большой');
      return false;
    }
    return true;
  };

  const checkFileExtension = (file: File) => {
    const fileExtensionRegExp = extensions || /.(jpg|jpeg|png|pdf)$/i;

    if (!file.name.match(fileExtensionRegExp)) {
      setErrorMessage('Неподходящее расширение файла');
      return false;
    }

    return true;
  };

  const uploadInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && checkFileExtension(file) && checkFileSize(file)) {
      setErrorMessage('');
      setFile(file);
      onChange(file);
    }
  };

  const onBtnDeleteClick = (e: MouseEvent<HTMLOrSVGElement>) => {
    e.preventDefault();
    setFile(null);
    setFileUrl(null);
    setErrorMessage('');
    if (onDelete) onDelete();
  };

  const containerClasses = clsx(styles.fileUpload, {
    [wrapperClassname]: !!wrapperClassname,
    [styles.error]: !!errorMessage,
  });

  const currentFileName = file
    ? file.name
    : fileUrl?.split('/')[fileUrl.split('/').length - 1];

  const uploadDescription = errorMessage
    ? errorMessage
    : description
    ? description
    : maxSize >= 1_048_576
    ? `${text ? text : 'Максимальный размер'} ${+(maxSize / 1_048_576).toFixed(
        1
      )} МБ.`
    : `${text ? text : 'Максимальный размер'} ${+(maxSize / 1_024).toFixed(
        1
      )} КБ.`;

  const getFileName = () =>
    currentFileName && currentFileName.length > 20
      ? currentFileName.slice(0, 20) +
        '...' +
        currentFileName.slice(currentFileName.lastIndexOf('.'))
      : currentFileName;

  return (
    <div className={containerClasses}>
      {label && <span className={styles.label}>{label}</span>}

      <label className={styles.uploadBtn}>
        {file || fileUrl ? <IcFile /> : <IcUpload />}
        <span>
          {file || fileUrl
            ? 'Файл прикреплен: ' + getFileName()
            : 'Прикрепить файл'}
        </span>
        {(file || fileUrl) && <IcClose onClick={onBtnDeleteClick} />}

        <input type='file' onChange={uploadInputOnChange} />
      </label>

      <p className={styles.description}>{uploadDescription}</p>
    </div>
  );
};
