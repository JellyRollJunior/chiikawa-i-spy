import { Footer } from '../../components/Footer/Footer.jsx';
import { Header } from '../../components/Header/Header.jsx';
import styles from './Error404Page.module.css';

const Error404Page = () => {
  return (
    <>
      <div>
        <Header />
        <main>
          <h2>Error!!!</h2>
        </main>
      </div>
      <Footer />
    </>
  );
};

export { Error404Page };
