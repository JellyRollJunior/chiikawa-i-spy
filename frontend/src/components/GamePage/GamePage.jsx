import { useRef, useState } from 'react';
import chiikawaWoSagase from '../../assets/chiikawa-wo-sagase.jpg';

const GamePage = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.style.display = 'none';
  }

  return (
    <>
      <h1>Game page!</h1>
      <main>
        <img src={chiikawaWoSagase} alt="" onClick={() => toggleMenu()} />
        <div ref={menuRef}>
          I am a menu
        </div>
      </main>
    </>
  );
};

export { GamePage };
