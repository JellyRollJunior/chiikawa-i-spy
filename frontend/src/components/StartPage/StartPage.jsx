import { Link } from 'react-router-dom';
import { useGames } from '../../hooks/useGames';

const StartPage = () => {
  const { games, loading, error } = useGames();

  return (
    <>
      <h1>I Spy Chiikawa!</h1>
      {loading && <h3>Loading games</h3>}
      {error && <h3>{error}</h3>}
      {games && !error && (
        <ul>
          {games.map((game) => (
            <Link to="/game" key={game.id}>
              <button>
                {game.id} {game.name}
              </button>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export { StartPage };
