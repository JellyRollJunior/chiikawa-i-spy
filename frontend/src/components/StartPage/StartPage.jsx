import { Link } from 'react-router-dom';
import { useGames } from '../../hooks/useGames.js';
import { Header } from '../Header/Header.jsx';
import { IconWrapper } from '../IconWrapper/IconWrapper.jsx';
import { Leaderboard } from '../Leaderboard/Leaderboard.jsx';
import chiikawaWoSagase from '../../assets/temp/chiikawa-wo-sagase.jpg';
import styles from './StartPage.module.css';
import shared from '../../styles/shared.module.css';
import { useState, useEffect } from 'react';
import { Notification } from '../Notification/Notification.jsx';

const StartPage = () => {
  const { games, loading, error } = useGames();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (error) {
      addNotificationTimed(error, false);
    }
  }, [error]);

  const addNotification = (message, successNotification) => {
    const id = crypto.randomUUID();
    setNotifications([
      ...notifications,
      {
        id,
        message,
        successNotification,
      },
    ]);
    return id;
  };

  const addNotificationTimed = async (message, successNotification) => {
    const id = addNotification(message, successNotification);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setNotifications(notifications.filter((item) => item.id != id));
  };

  return (
    <>
      <Header />
      <main>

        {/* make this notification holder absolute position -> not the notifications itself */}
        <div>
          {Array.isArray(notifications) &&
            notifications.length > 0 &&
            notifications.map((notification) => (
              <Notification
                key={notification.id}
                message={notification.message}
                style={{ right: 0, marginRight: '24px', zIndex: 2 }}
                successNotification={notification.successNotification}
              />
            ))}
        </div>
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
