import { useContext, useEffect, useState } from 'react';
import { useWinners } from '../../hooks/useWinners.js';
import { NotificationContext } from '../../providers/notificationContext.jsx';
import { ErrorElement } from '../ErrorElement/ErrorElement.jsx';
import { IconWrapper } from '../IconWrapper/IconWrapper.jsx';
import styles from './Leaderboard.module.css';
import shared from '../../styles/shared.module.css';

const Leaderboard = ({ games }) => {
  const { winners, loading, error } = useWinners();
  const [gameId, setGameId] = useState(null);
  const { addPersistentNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (error) {
      addPersistentNotification(error);
    }
  }, [error]);

  useEffect(() => {
    if (games && games[0]) {
      setGameId(games[0].id);
    }
  }, [games]);

  return (
    <>
      {error && (
        <ErrorElement error={error} msgId={2}>
          <button
            onClick={() => window.location.reload()}
            className={`${shared.primaryButton} ${shared.marginTopSmall}`}
          >
            Refresh page
          </button>
        </ErrorElement>
      )}
      {games && (
        <section className={`${shared.marginTopMedium}`}>
          {loading && <h3 className={shared.messages}>Loading winners</h3>}

          <IconWrapper size={46} margin={12}>
            <h2 className={`${shared.card} ${shared.title}`}>Leaderboard</h2>
          </IconWrapper>
          <ul
            className={`${styles.leaderboard} ${shared.card} ${shared.marginTopSmall}`}
          >
            <div className={styles.leaderboardButtonWrapper}>
              {games.map((game) => (
                <button
                  className={shared.primaryButton}
                  onClick={() => setGameId(game.id)}
                  key={game.id}
                >
                  {game.name}
                </button>
              ))}
            </div>
            <li className={styles.leaderboardLegend} key={'he was number one!'}>
              <h3>Place</h3>
              <h3>Name</h3>
              <h3>Time</h3>
            </li>
            {winners &&
              gameId &&
              winners.map(
                (winner, index) =>
                  winner.gameId == gameId && (
                    <li className={styles.leaderboardItem} key={winner.id}>
                      <h4>{index}</h4>
                      <h4>{winner.name}</h4>
                      <h4 className={styles.left}>{winner.seconds}s</h4>
                    </li>
                  )
              )}
          </ul>
        </section>
      )}
    </>
  );
};

export { Leaderboard };
