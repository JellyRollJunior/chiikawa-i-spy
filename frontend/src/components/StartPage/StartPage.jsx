import { Link } from 'react-router-dom';
import { useGames } from '../../hooks/useGames';

const StartPage = () => {
  const {games, loading, error} = useGames();

  return (
    <>
      <h1>I Spy Chiikawa!</h1>
      {games && (
        <ul>
          {games.map((game) => (
            <Link to="/game">
              <button>{game.id} {game.name}</button>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export { StartPage };
