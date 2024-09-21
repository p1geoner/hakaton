import {
  convertToRaw,
  ContentState,
  EditorState,
  convertFromHTML,
} from 'draft-js';
import draftjsToHtml from 'draftjs-to-html';
import { FC, useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';

import { IWysiwygProps } from './types';

import IcBold from '@/assets/icons/wysiwyg/ic_wysiwyg-bold.svg';
import IcItalic from '@/assets/icons/wysiwyg/ic_wysiwyg-italic.svg';
import IcListOrdered from '@/assets/icons/wysiwyg/ic_wysiwyg-list-ordered.svg';
import IcListUnordered from '@/assets/icons/wysiwyg/ic_wysiwyg-list-unordered.svg';
import IcUnderline from '@/assets/icons/wysiwyg/ic_wysiwyg-underline.svg';

import styles from './Wysiwyg.module.scss';
import './Wysiwyg.scss';

const Wysiwyg: FC<IWysiwygProps> = ({ label, name, value, formik }) => {
  const [editorState, setEditorState] = useState<any>(null);

  useEffect(() => {
    if (editorState === null && value !== '') {
      const html = value || '';
      const blocksFromHTML = convertFromHTML(html) as any;
      const content = ContentState.createFromBlockArray(blocksFromHTML);

      setEditorState(EditorState.createWithContent(content));
    }
  }, [value]);

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
    if ('setFieldValue' in formik) {
      formik.setFieldValue(
        name,
        editorState &&
          draftjsToHtml(convertToRaw(editorState.getCurrentContent()))
      );
    }
  };

  return (
    <div className={styles.container}>
      {label && <span>{label}</span>}

      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ['list', 'inline'],
          list: {
            inDropdown: false,
            options: ['ordered', 'unordered'],
            ordered: { icon: IcListOrdered.src },
            unordered: { icon: IcListUnordered.src },
          },
          inline: {
            inDropdown: false,
            options: ['bold', 'underline', 'italic'],
            bold: { icon: IcBold.src },
            italic: { icon: IcItalic.src },
            underline: { icon: IcUnderline.src },
          },
        }}
        stripPastedStyles
      />
    </div>
  );
};

export default Wysiwyg;
