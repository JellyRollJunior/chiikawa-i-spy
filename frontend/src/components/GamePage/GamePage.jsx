import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNotifications } from '../../hooks/useNotifications.js';
import { NotificationContext } from '../../providers/notificationContext.jsx';
import { Header } from '../Header/Header.jsx';
import { Notifications } from '../Notifications/Notifications.jsx';
import { IconWrapper } from '../IconWrapper/IconWrapper.jsx';
import { useGameSession } from '../../hooks/useGameSession.js';
import { GameImage } from '../GameImage/GameImage.jsx';
import { WinModal } from '../WinModal/WinModal.jsx';
import styles from './GamePage.module.css';
import shared from '../../styles/shared.module.css';
import usagi from '../../assets/temp/usagi.jpg';
import shisa from '../../assets/temp/shisa.jpg';
import hachiware from '../../assets/temp/hachiware.jpg';
import chiikawa from '../../assets/temp/chiikawa.jpg';

const tempImages = [usagi, shisa, hachiware, chiikawa];

const GamePage = () => {
  const gameId = useParams().gameId;
  const { assets, targets, setTargets, error, loading } = useGameSession(gameId);
  const [isWinModalVisible, setIsWinModalVisible] = useState(false);
  const [winTime, setWinTime] = useState(false);
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
  }, [error])

  const showWinModal = (winTime) => {
    setIsWinModalVisible(true);
    setWinTime(winTime);
  };

  return (
    <>
      <Header />
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
          {loading && <h3 className={shared.messages}>Loading</h3>}
          {assets && targets && !error && (
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
              <section className={styles.targetSection}>
                <ul className={shared.horizontalWrapper}>
                  {targets.map((target, index) => (
                    <li className={styles.target} key={target.id}>
                      <img
                        src={tempImages[index]}
                        alt=""
                        className={`${styles.targetImage} ${
                          target.isFound && styles.foundImage
                        }`}
                      />
                      <h4
                        className={target.isFound ? `${styles.foundTitle}` : ''}
                      >
                        {target.name}
                        {target.isFound && ' ✓'}
                      </h4>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          )}
        </main>
        {isWinModalVisible && <WinModal time={winTime} />}
      </NotificationContext.Provider>
    </>
  );
};

export { GamePage };
