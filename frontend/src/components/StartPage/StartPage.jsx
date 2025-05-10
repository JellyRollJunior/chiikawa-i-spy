import { Link } from 'react-router-dom';
import { useGames } from '../../hooks/useGames';
import chiikawaWoSagase from '../../assets/chiikawa-wo-sagase.jpg';
import styles from './StartPage.module.css';
import shared from '../../styles/shared.module.css';

const StartPage = () => {
  const { games, loading, error } = useGames();

  return (
    <>
      <h1>I Spy Chiikawa!</h1>
      {loading && <h3>Loading games</h3>}
      {error && <h3>{error}</h3>}
      {games && !error && (
        <ul className={shared.horizontalWrapper}>
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
      )}
    </>
  );
};

export { StartPage };
