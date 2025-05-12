import { IconWrapper } from '../IconWrapper/IconWrapper';
import { Link } from 'react-router';
import styles from './Header.module.css';
import shared from '../../styles/shared.module.css';

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <IconWrapper>
        <Link to="/">
          <button className={`${styles.headerButton} ${shared.button}`}>
            <h1 className={styles.title}>I Spy Chiikawa!</h1>
          </button>
        </Link>
      </IconWrapper>
      <nav>
        {children}
      </nav>
    </header>
  );
};

export { Header };
