import { Link } from 'react-router-dom';
import { useGames } from '../../hooks/useGames.js';
import { Header } from '../Header/Header.jsx';
import chiikawaWoSagase from '../../assets/chiikawa-wo-sagase.jpg';
import styles from './StartPage.module.css';
import shared from '../../styles/shared.module.css';

const StartPage = () => {
  const { games, loading, error } = useGames();

  return (
    <>
      <Header />
      {loading && <h3>Loading games</h3>}
      {error && <h3>{error}</h3>}
      {games && !error && (
        <>
          <h2 className={`${styles.gamesTitle} ${shared.marginTopMedium}`}>Games</h2>
          <ul className={`${shared.horizontalWrapper} ${shared.marginTopSmall}`}>
            {games.map((game) => (
              <li key={game.id} className={`${shared.card} ${styles.gameLink}`}>
                <Link to={`/games/${game.id}`} className={styles.gameLinkContent}>
                  <img src={chiikawaWoSagase} alt="" />
                  <h3>{game.name}</h3>
                  <button className={shared.primaryButton}>Start Game!</button>
                </Link>
              </li>
            ))}
          </ul>
          </>
      )}
    </>
  );
};

export { StartPage };
