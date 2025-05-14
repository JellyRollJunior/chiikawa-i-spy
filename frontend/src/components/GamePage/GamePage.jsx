import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../Header/Header.jsx';
import { IconWrapper } from '../IconWrapper/IconWrapper.jsx';
import { TargetMenu } from '../targetMenu/TargetMenu.jsx';
import { useGameSession } from '../../hooks/useGameSession.js';
import chiikawaWoSagase from '../../assets/temp/chiikawa-wo-sagase.jpg';
import styles from './GamePage.module.css';
import shared from '../../styles/shared.module.css';
import usagi from '../../assets/temp/usagi.jpg';
import shisa from '../../assets/temp/shisa.jpg';
import hachiware from '../../assets/temp/hachiware.jpg';
import chiikawa from '../../assets/temp/chiikawa.jpg';

const tempImages = [ usagi, chiikawa, hachiware, shisa ];

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

  const gameId = useParams().gameId;
  const { session, error, loading } = useGameSession(gameId);

  return (
    <>
      <Header></Header>
      <main>
        {loading && <h3 className={shared.messages}>Loading</h3>}
        {error && <h3 className={shared.messages}>{error}</h3>}
        {session && !error && (
          <>
            <div className={`${shared.card} ${styles.gameContentWrapper} ${shared.marginTopMedium}`}>
              <section>
                <IconWrapper size={46} margin={12} leftIcon={0} rightIcon={5}>
                  <h2 className={shared.title}>{session.name}</h2>
                </IconWrapper>
              </section>
              <section>
                <div className={styles.imageWrapper}>
                  <img
                    src={chiikawaWoSagase}
                    alt="Chiikawa Village"
                    onClick={(event) => toggleMenu(event)}
                  />
                  <TargetMenu isVisible={showMenu} x={menuXY[0]} y={menuXY[1]} />
                </div>
              </section>
              <section className={styles.targetSection}>
                <ul className={shared.horizontalWrapper}>
                  {session.targets.map((target, index) => (
                    <li className={styles.target}>
                      <img src={tempImages[index]} alt="" className={styles.targetImage} />
                      <h4>{target.name}</h4>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export { GamePage };
