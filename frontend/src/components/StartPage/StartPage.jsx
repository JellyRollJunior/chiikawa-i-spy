import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGames } from '../../hooks/useGames.js';
import { NotificationContext } from '../../providers/notificationContext.jsx';
import { Header } from '../Header/Header.jsx';
import { Notifications } from '../Notifications/Notifications.jsx';
import { IconWrapper } from '../IconWrapper/IconWrapper.jsx';
import { Leaderboard } from '../Leaderboard/Leaderboard.jsx';
import chiikawaWoSagase from '../../assets/temp/chiikawa-wo-sagase.jpg';
import styles from './StartPage.module.css';
import shared from '../../styles/shared.module.css';

const StartPage = () => {
  const { games, loading, error } = useGames();
  const { addErrorNotification, addTimedNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (error) {
      addErrorNotification(error, true);
      addTimedNotification(error);
    }
  }, [error]);

  return (
    <>
      <Header />
      <main>
        <Notifications />
        {loading && <h3 className={shared.messages}>Loading games</h3>}
        {games && !error && (
          <section>
            <div className={shared.marginTopMedium}>
              <IconWrapper size={46} margin={12}>
                <h2 className={`${shared.card} ${shared.title}`}>Games</h2>
              </IconWrapper>
            </div>
            <h3 className={`${shared.marginTopSmall} ${styles.tutorial}`}>
              Play a rousing game of I Spy with Chiikawa and friends! <br />
              Can you spot all the cute critters?
            </h3>
            <ul
              className={`${shared.horizontalWrapper} ${shared.marginTopSmall}`}
            >
              {games.map((game) => (
                <li
                  key={game.id}
                  className={`${shared.card} ${styles.gameLink}`}
                >
                  <Link
                    to={`/games/${game.id}`}
                    className={styles.gameLinkContent}
                  >
                    <img src={chiikawaWoSagase} alt="" />
                    <h3>{game.name}</h3>
                    <button className={shared.primaryButton}>
                      Start Game!
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
        <Leaderboard games={games} />
      </main>
    </>
  );
};

export { StartPage };
