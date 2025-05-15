import { useState } from 'react';
import { TargetMenu } from '../targetMenu/TargetMenu.jsx';
import chiikawaWoSagase from '../../assets/temp/chiikawa-wo-sagase.jpg';
import styles from './GameImage.module.css';

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

  return (
    <div className={styles.imageWrapper}>
      <img
        src={chiikawaWoSagase}
        alt="Chiikawa Village"
        onClick={(event) => toggleMenu(event)}
      />
      <TargetMenu isVisible={showMenu} x={menuXY[0]} y={menuXY[1]} />
    </div>
  );
};

export { GameImage };
