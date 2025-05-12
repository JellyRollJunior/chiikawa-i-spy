import { Link } from 'react-router';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <button className={styles.headerButton}>
          <h1 className={styles.title}>I Spy Chiikawa!</h1>
        </button>
      </Link>
      <nav><button>hi</button></nav>
    </header>
  );
};

export { Header };
