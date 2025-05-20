import { useState } from 'react';
import { useParams } from 'react-router';
import { getUrl } from '../../utils/serverUrl.js';
import { makeRequest } from '../../utils/requests.js';
import { Notification } from '../Notification/Notification.jsx';
import { TargetMenu } from '../TargetMenu/TargetMenu.jsx';
import chiikawaWoSagase from '../../assets/temp/chiikawa-wo-sagase.jpg';
import styles from './GameImage.module.css';

const GameImage = ({ url, targets, setTargets }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuXY, setMenuXY] = useState([0, 0]);
  const [guess, setGuess] = useState([0, 0]);
  const [notification, setNotification] = useState({
    isShown: false,
    message: '',
    successNotification: false,
  });

  const toggleMenu = (event) => {
    const imageXY = event.currentTarget.offsetParent.getBoundingClientRect();
    const x = event.clientX - imageXY.x;
    const y = event.clientY - imageXY.y;
    setGuess([
      (x / event.currentTarget.width) * 100,
      (y / event.currentTarget.height) * 100,
    ]);
    console.log([x, y]);
    console.log(guess);
    setMenuXY([x, y]);
    setShowMenu(!showMenu);
  };

  const gameId = useParams().gameId;
  const makeGuess = async (targetId) => {
    // if no token, refresh to get new token
    const token = localStorage.getItem('token');
    if (!token) window.location.reload();

    // veriy if guess is correct
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
      handleNotification(`You found ${data.targets.find((target) => target.id = targetId).name}!`, true);
    } else {
      handleNotification(`No target found. Try again!`, false);
    }
    setShowMenu(false);
  };

  const handleNotification = async (message, successNotification) => {
    setNotification({ isShown: true, message, successNotification });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setNotification({ isShown: false, ...notification });
  };

  // replace once images uploaded to supabase
  url = chiikawaWoSagase;
  return (
    <div className={styles.imageWrapper}>
      {notification.isShown && (
        <Notification
          message={notification.message}
          successNotification={notification.successNotification}
        />
      )}
      <img
        src={url}
        alt="Chiikawa Village"
        onClick={(event) => toggleMenu(event)}
      />
      <TargetMenu
        targets={targets}
        isVisible={showMenu}
        x={menuXY[0]}
        y={menuXY[1]}
        onGuess={makeGuess}
        handleNotification={handleNotification}
      />
    </div>
  );
};

export { GameImage };
