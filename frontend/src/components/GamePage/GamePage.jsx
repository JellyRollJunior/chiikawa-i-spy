import { useRef, useState } from 'react';
import chiikawaWoSagase from '../../assets/chiikawa-wo-sagase.jpg';
import styles from './GamePage.module.css';

const GamePage = () => {
  const menuRef = useRef(null);
  const [showMenu, setShowMenu] = useState(true);
  const [menuXY, setMenuXY] = useState([0, 0]);

  const toggleMenu = (event) => {
    if (showMenu) {
      menuRef.current.style.display = 'block';
      const imageXY = event.currentTarget.offsetParent.getBoundingClientRect();
      const x = event.clientX - imageXY.x;
      const y = event.clientY - imageXY.y;
      setMenuXY([x, y]);
    } else {
      menuRef.current.style.display = 'none';
    }
    setShowMenu(!showMenu);
  };

  return (
    <>
      <h1>Game page!</h1>
      <main>
        <div className={styles.imageWrapper}>
          <img
            src={chiikawaWoSagase}
            alt=""
            onClick={(event) => toggleMenu(event)}
          />
          <div
            className={styles.menu}
            style={{ left: menuXY[0], top: menuXY[1] }}
            ref={menuRef}
          >
            I am a menu
          </div>
        </div>
      </main>
    </>
  );
};

export { GamePage };
