import { Header } from '../../components/Header/Header.jsx';
import { IconWrapper } from '../../components/IconWrapper/IconWrapper.jsx';
import { Link } from 'react-router';
import { Footer } from '../../components/Footer/Footer.jsx';
import styles from './Error404Page.module.css';
import shared from '../../styles/shared.module.css';
import usagi from '../../assets/error/usagi.png';

const Error404Page = () => {
  return (
    <>
      <div>
        <Header />
        <main className={shared.marginTopMedium}>
          <section
            className={`${shared.card} ${styles.errorWrapper} ${shared.marginTopMedium}`}
          >
            <IconWrapper size={36} margin={12} leftIcon={5} rightIcon={5}>
              <h2>404: Page Not Found</h2>
            </IconWrapper>
            <img
              src={usagi}
              alt="usagi the ancient wise rabbit looking at you"
              className={`${styles.errorUsagi} ${shared.marginTopSmall}`}
            />
            <p>
              Ancient wise rabbit once said: <br /> Yaha Yaha unma unma Yaha
            </p>
            <Link to="/" className={shared.marginTopSmall}>
              <button className={shared.primaryButton}>
                Return to homepage
              </button>
            </Link>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export { Error404Page };
