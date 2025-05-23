import { useEffect, useState } from 'react';
import { useWinners } from '../../hooks/useWinners';
import { IconWrapper } from '../IconWrapper/IconWrapper.jsx';
import styles from './Leaderboard.module.css';
import shared from '../../styles/shared.module.css';

const Leaderboard = ({ gameIds }) => {
  const { winners, loading, error } = useWinners();
  const [gameId, setGameId] = useState(null);

  useEffect(() => {
    gameIds && setGameId(gameIds[0])
  }, [gameIds])

  return (
    <section className={`${shared.marginTopMedium}`}>
      <IconWrapper size={46} margin={12}>
        <h2 className={`${shared.card} ${shared.title}`}>Leaderboard</h2>
      </IconWrapper>
      {loading && <h3 className={shared.messages}>Loading winners</h3>}
      {error && <h3 className={shared.messages}>{error}</h3>}
      <ul className={`${styles.leaderboard} ${shared.card} ${shared.marginTopSmall}`}>
        <li className={styles.leaderboardLegend} key={'he was number one!'}>
          <h3>Place</h3>
          <h3>Name</h3>
          <h3>Time</h3>
        </li>
        {winners && gameId && winners.map(
          (winner, index) =>
            winner.gameId == gameId && 
              <li className={styles.leaderboardItem} key={winner.id}>
                <h4>{index}</h4>
                <h4>{winner.name}</h4>
                <h4 className={styles.left}>{winner.seconds}s</h4>
              </li> 
          )}
      </ul>
    </section>
  );
};

export { Leaderboard };
