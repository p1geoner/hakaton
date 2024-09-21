import parse from 'html-react-parser';

import styles from './CustomQuote.module.scss';

interface ICustomQuoteProps {
  data: {
    text: string;
    caption: string;
  };
}

const CustomQuote = ({ data }: ICustomQuoteProps) => {
  if (!data.text && !data.caption) return null;

  return (
    <div className={styles.quote}>
      {data.caption && <p className={styles.caption}>{parse(data.caption)}</p>}
      {data.text && <p className={styles.text}>{parse(data.text)}</p>}
    </div>
  );
};

export default CustomQuote;
