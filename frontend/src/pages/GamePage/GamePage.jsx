import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNotifications } from '../../hooks/useNotifications.js';
import { NotificationContext } from '../../providers/notificationContext.jsx';
import { Header } from '../../components/Header/Header.jsx';
import { Stopwatch } from '../../components/Stopwatch/Stopwatch.jsx';
import { Notifications } from '../../components/Notifications/Notifications.jsx';
import { LoadingElement } from '../../components/LoadingElement/LoadingElement.jsx';
import { IconWrapper } from '../../components/IconWrapper/IconWrapper.jsx';
import { useGameSession } from '../../hooks/useGameSession.js';
import { GameImage } from '../../components/GameImage/GameImage.jsx';
import { TargetsGallery } from '../../components/TargetsGallery/TargetsGallery.jsx';
import { WinModal } from '../../components/WinModal/WinModal.jsx';
import styles from './GamePage.module.css';
import shared from '../../styles/shared.module.css';

const GamePage = () => {
  const gameId = useParams().gameId;
  const { assets, targets, setTargets, error, loading } = useGameSession(gameId);
  const [winTime, setWinTime] = useState(null);
  const {
    notifications,
    addPersistentNotification,
    addTimedNotification,
    removeNotification,
  } = useNotifications();

  useEffect(() => {
    if (error) {
      addPersistentNotification(error);
    }
  }, [error]);

  const showWinModal = (winTime) => {
    setWinTime(winTime);
  };

  return (
    <>
      <Header>
        {assets && (
          <Stopwatch startTime={assets.startTime} isRunning={winTime == null} />
        )}
      </Header>
      <NotificationContext.Provider
        value={{
          notifications,
          addPersistentNotification,
          addTimedNotification,
          removeNotification,
        }}
      >
        <main>
          <Notifications />
          {loading && <LoadingElement message={'Loading game'} />}
          {assets && targets && !loading && (
            <div className={`${styles.wrapper} ${shared.marginTopMedium}`}>
              <section className={`${shared.card} ${styles.gameContent}`}>
                <IconWrapper size={46} margin={12} leftIcon={0} rightIcon={5}>
                  <h2 className={shared.title}>{assets.name}</h2>
                </IconWrapper>
                <GameImage
                  url={assets.url}
                  targets={targets}
                  setTargets={setTargets}
                  showWinModal={showWinModal}
                />
              </section>
              <TargetsGallery targets={targets} />
            </div>
          )}
        </main>
        {winTime && <WinModal time={winTime} />}
      </NotificationContext.Provider>
    </>
  );
};

export { GamePage };
