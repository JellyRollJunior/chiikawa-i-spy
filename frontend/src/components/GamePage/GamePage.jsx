import { useRef, useState } from 'react';
import chiikawaWoSagase from '../../assets/chiikawa-wo-sagase.jpg';
import styles from './GamePage.module.css';

const GamePage = () => {
  const menuRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (event) => {
    if (showMenu) {
      menuRef.current.style.display = 'block';
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
          <img src={chiikawaWoSagase} alt="" onClick={(event) => toggleMenu(event)} />
          <div className={styles.menu} ref={menuRef}>I am a menu</div>
        </div>
      </main>
    </>
  );
};

export { GamePage };
