import { useEffect, useState } from 'react';
import { icons } from '../IconWrapper/icons.js';
import styles from './LoadingElement.module.css';
import shared from '../../styles/shared.module.css';

// make verything work with loading
const LoadingElement = ({ message = 'Loading games' }) => {
  const [index, setIndex] = useState(Math.floor(Math.random() * icons.length));
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      // shuffle through icons
      setIndex((prev) => (prev + 1) % icons.length);
    }, 2500);

    const textId = setInterval(() => {
      // add loading dots to text
      setDots((prev) => (prev + 1) % 4);
    }, 500);

    return () => {
      clearInterval(id);
      clearInterval(textId);
    };
  }, []);

  return (
    <section className={shared.marginTopMedium}>
      <img
        src={icons[index]}
        alt=""
        className={`${shared.fadeLoop} ${styles.img}`}
      />
      <h2 className={styles.loadingText}>
        {message}
        {'.'.repeat(dots)}
      </h2>
    </section>
  );
};

export { LoadingElement };
