import { Link } from 'react-router-dom';

const StartPage = () => {
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
