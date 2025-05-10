import { Link } from 'react-router-dom';
import { useGames } from '../../hooks/useGames';
import chiikawaWoSagase from '../../assets/chiikawa-wo-sagase.jpg';
import styles from './StartPage.module.css';

const StartPage = () => {
  const { games, loading, error } = useGames();

  return (
    <>
      <h1>I Spy Chiikawa!</h1>
      {loading && <h3>Loading games</h3>}
      {error && <h3>{error}</h3>}
      {games && !error && (
        <ul className={styles.horiWrapper}>
          {games.map((game) => (
            <li key={game.id} className={styles.gameItem}>
              <Link to={`/games/${game.id}`}>
                <img src={chiikawaWoSagase} alt="" />
                <h3>{game.name}</h3>
                <button>Start Game!</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export { StartPage };
