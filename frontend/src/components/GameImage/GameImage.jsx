import { useState } from 'react';
import { TargetMenu } from '../TargetMenu/TargetMenu.jsx';
import { makeRequest } from '../../utils/requests.js';
import chiikawaWoSagase from '../../assets/temp/chiikawa-wo-sagase.jpg';
import styles from './GameImage.module.css';
import { getUrl } from '../../utils/serverUrl.js';
import { useParams } from 'react-router';

const GameImage = ({url, targets}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuXY, setMenuXY] = useState([0, 0]);
  const [guess, setGuess] = useState([0, 0]);

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

  // make state for found targets -> add to state if guess successful
  const gameId = useParams().gameId;
  const makeGuess = async (targetId) => {
    // if no token, refresh to get new token
    const token = localStorage.getItem('token');
    if (!token) window.location.reload();
    console.log({
        targetId,
        x: Math.floor(guess[0]),
        y: guess[1],
      })

    const data = await makeRequest(getUrl(`/games/${gameId}/guesses`), {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        targetId,
        x: Math.floor(guess[0]),
        y: Math.floor(guess[1]),
      })
    });
    console.log(data);
    // if no token error -> refresh page to get new token
  }

  // replace once images uploaded to supabase
  console.log(url);
  return (
    <div className={styles.imageWrapper}>
      <img
        src={chiikawaWoSagase}
        alt="Chiikawa Village"
        onClick={(event) => toggleMenu(event)}
      />
      <TargetMenu targets={targets} isVisible={showMenu} x={menuXY[0]} y={menuXY[1]} onGuess={makeGuess} />
    </div>
  );
};

export { GameImage };
