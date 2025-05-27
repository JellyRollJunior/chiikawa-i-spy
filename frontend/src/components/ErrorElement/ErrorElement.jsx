import { IconWrapper } from '../IconWrapper/IconWrapper.jsx';
import styles from './ErrorElement.module.css';
import shared from '../../styles/shared.module.css';
import kurimanju from '../../assets/error/kurimanju.png';
import usagi from '../../assets/error/usagi.png';
import chiikawa from '../../assets/error/chiikawa.png';

const messages = [
  {
    src: kurimanju,
    author: 'Ancient wise badger thing',
    quote: 'I need a beer',
    icons: 2,
  },
  {
    src: usagi,
    author: 'Ancient wise rabbit',
    quote: 'Yaha Yaha unma unma Yaha',
    icons: 5,
  },
  {
    src: chiikawa,
    author: 'Ancient wise hamder tingy',
    quote: 'u u wa wa uwa',
    icons: 0,
  },
];

const ErrorElement = ({ error, msgId = 0, children }) => {
  if (msgId >= messages.length) msgId = 0;

  return (
    <section
      className={`${shared.card} ${styles.errorWrapper} ${shared.marginTopMedium}`}
    >
      <IconWrapper
        size={36}
        margin={12}
        leftIcon={messages[msgId].icons}
        rightIcon={messages[msgId].icons}
      >
        <h2>{error}</h2>
      </IconWrapper>
      <img
        src={messages[msgId].src}
        alt={messages[msgId].author}
        className={`${styles.errorUsagi} ${shared.marginTopSmall}`}
      />
      <p>
        {messages[msgId].author} once said:
        <br />
        {messages[msgId].quote}
      </p>
      {children}
    </section>
  );
};

export { ErrorElement };
