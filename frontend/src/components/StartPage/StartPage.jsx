import { Link } from 'react-router-dom';
import { useGames } from '../../hooks/useGames';

const StartPage = () => {

  const games = useGames();
  console.log(games);

  return (
    <>
      <h1>I Spy Chiikawa!</h1>
      <Link to="/game">
        <button>Start</button>
      </Link>
    </>
  );
};

export { StartPage };
