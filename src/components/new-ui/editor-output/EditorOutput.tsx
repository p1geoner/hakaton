'use client';

import Output from 'editorjs-react-renderer';

import { CustomQuote } from './components';

import { IEditorOutputProps } from './types';

import styles from './EditorOutput.module.scss';

export const EditorOutput = ({ content }: IEditorOutputProps) => {
  const config = {
    paragraph: {
      disableDefaultStyle: true,
    },
    header: {
      disableDefaultStyle: true,
    },
    image: {
      disableDefaultStyle: true,
    },
    list: {
      disableDefaultStyle: true,
    },
    quote: {
      disableDefaultStyle: true,
    },
  };

  const renderers = {
    quote: CustomQuote,
  };

  return (
    <section className={styles.outputWrapper}>
      <Output
        data={JSON.parse(content)}
        config={config}
        renderers={renderers}
      />
    </section>
  );
};
