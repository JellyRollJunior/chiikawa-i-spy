import { IconWrapper } from '../IconWrapper/IconWrapper.jsx';
import { Link } from 'react-router';
import styles from './ErrorElement.module.css';
import shared from '../../styles/shared.module.css';
import kurimanju from '../../assets/error/kurimanju.png';

const ErrorElement = () => {
  return (
    <section
      className={`${shared.card} ${styles.errorWrapper} ${shared.marginTopMedium}`}
    >
      <IconWrapper size={36} margin={12} leftIcon={5} rightIcon={5}>
        <h2>404: Page Not Found</h2>
      </IconWrapper>
      <img
        src={kurimanju}
        alt="kurimanju looking at you"
        className={`${styles.errorUsagi} ${shared.marginTopSmall}`}
      />
      <p>
        Ancient wise badge thing once said:
        <br />
        u u wa wa uwa
      </p>
      <Link to="/" className={shared.marginTopSmall}>
        <button className={shared.primaryButton}>Return to homepage</button>
      </Link>
    </section>
  );
};

export { ErrorElement };
