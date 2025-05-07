import { useState } from 'react';
import chiikawaWoSagase from '../../assets/chiikawa-wo-sagase.jpg';
import styles from './GamePage.module.css';
import { TargetMenu } from '../targetMenu/TargetMenu';

const GamePage = () => {
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
    <>
      <h1>Game page!</h1>
      <main>
        <div className={styles.imageWrapper}>
          <img
            src={chiikawaWoSagase}
            alt="Chiikawa Village"
            onClick={(event) => toggleMenu(event)}
          />
          <TargetMenu isVisible={showMenu} x={menuXY[0]} y={menuXY[1]} />
        </div>
      </main>
    </>
  );
};

export { GamePage };
