import { Header } from '../../components/Header/Header.jsx';
import { ErrorElement } from '../../components/ErrorElement/ErrorElement.jsx';
import { Link } from 'react-router';
import { Footer } from '../../components/Footer/Footer.jsx';
import shared from '../../styles/shared.module.css';

const Error404Page = () => {
  return (
    <>
      <div>
        <Header />
        <main className={shared.marginTopMedium}>
          <ErrorElement error={'404: Page not found.'} msgId={1}>
            <Link to="/" className={shared.marginTopSmall}>
              <button className={shared.primaryButton}>
                Return to homepage
              </button>
            </Link>
          </ErrorElement>
        </main>
      </div>
      <Footer />
    </>
  );
};

export { Error404Page };
