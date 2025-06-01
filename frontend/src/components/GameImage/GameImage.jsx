import { useState } from 'react';
import { useParams } from 'react-router';
import { getUrl } from '../../utils/serverUrl.js';
import { makeRequest } from '../../utils/requests.js';
import { NotificationContext } from '../../providers/notificationContext.jsx';
import { useNotifications } from '../../hooks/useNotifications.js';
import { Notifications } from '../Notifications/Notifications.jsx';
import { TargetMenu } from '../TargetMenu/TargetMenu.jsx';
import styles from './GameImage.module.css';

const GameImage = ({ src, targets, setTargets, showWinModal }) => {
  const gameId = useParams().gameId;
  const [showMenu, setShowMenu] = useState(false);
  const [menuXY, setMenuXY] = useState([0, 0]);
  const [guess, setGuess] = useState([0, 0]);
  const {
    notifications,
    addPersistentNotification,
    addTimedNotification,
    removeNotification,
  } = useNotifications();

  const toggleMenu = (event) => {
    const imageXY = event.currentTarget.offsetParent.getBoundingClientRect();
    const x = event.clientX - imageXY.x;
    const y = event.clientY - imageXY.y;
    setGuess([
      (x / event.currentTarget.width) * 100,
      (y / event.currentTarget.height) * 100,
    ]);
    setMenuXY([x, y]);
    setShowMenu(!showMenu);
  };

  const handleGuess = async (targetId) => {
    setShowMenu(false);
    // if no token, refresh to get new token
    const token = localStorage.getItem('token');
    if (!token) window.location.reload();

    // verify if guess is correct
    try {
      const data = await makeRequest(getUrl(`/games/${gameId}/guesses`), {
        mode: 'cors',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          targetId,
          x: Math.floor(guess[0]),
          y: Math.floor(guess[1]),
        }),
      });

      // display guess feedback
      if (data.guessSuccess) {
        localStorage.setItem('token', data.token);
        setTargets(data.targets);
        addTimedNotification(
          `You found ${targets.find((target) => target.id == targetId).name}!`
        );
        handleWin(data.targets);
      } else {
        addTimedNotification(`No target found. Try again!`, true);
      }
    } catch (error) {
      console.error(error);
      addPersistentNotification(`Unable to verify target position`);
    }
  };

  // check if user won and handle win
  const handleWin = async (targetData) => {
    if (!targetData.find((target) => target.isFound == false)) {
      try {
        const token = localStorage.getItem('token');
        const winnerData = await makeRequest(getUrl('/winners'), {
          mode: 'cors',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        // If server returns token, we won!
        if (winnerData.token) {
          localStorage.setItem('token', winnerData.token);
          showWinModal(winnerData.seconds);
        }
      } catch (error) {
        console.error(error);
        addPersistentNotification('Unable to verify win.');
      }
    }
  };

  return (
    <div className={styles.imageWrapper}>
      <NotificationContext.Provider
        value={{
          notifications,
          addPersistentNotification,
          addTimedNotification,
          removeNotification,
        }}
      >
        <Notifications style={{ top: '24px', alignItems: 'center' }} />
        <img
          src={src}
          alt="Chiikawa Village"
          onClick={(event) => toggleMenu(event)}
        />
        <TargetMenu
          targets={targets}
          isVisible={showMenu}
          x={menuXY[0]}
          y={menuXY[1]}
          xPercent={guess[0]}
          handleGuess={handleGuess}
        />
      </NotificationContext.Provider>
    </div>
  );
};

export { GameImage };
