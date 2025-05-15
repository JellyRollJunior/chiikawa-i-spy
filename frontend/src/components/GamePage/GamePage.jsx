import { useParams } from 'react-router-dom';
import { Header } from '../Header/Header.jsx';
import { IconWrapper } from '../IconWrapper/IconWrapper.jsx';
import { useGameSession } from '../../hooks/useGameSession.js';
import { GameImage } from '../GameImage/GameImage.jsx';
import styles from './GamePage.module.css';
import shared from '../../styles/shared.module.css';
import usagi from '../../assets/temp/usagi.jpg';
import shisa from '../../assets/temp/shisa.jpg';
import hachiware from '../../assets/temp/hachiware.jpg';
import chiikawa from '../../assets/temp/chiikawa.jpg';

const tempImages = [ usagi, chiikawa, hachiware, shisa ];

const GamePage = () => {
  const gameId = useParams().gameId;
  const { session, error, loading } = useGameSession(gameId);

  return (
    <>
      <Header />
      <main>
        {loading && <h3 className={shared.messages}>Loading</h3>}
        {error && <h3 className={shared.messages}>{error}</h3>}
        {session && !error && (
          <div className={`${styles.wrapper} ${shared.marginTopMedium}`}>
            <section className={`${shared.card} ${styles.gameContent}`}>
              <IconWrapper size={46} margin={12} leftIcon={0} rightIcon={5}>
                <h2 className={shared.title}>{session.name}</h2>
              </IconWrapper>
              <GameImage url={session.url} targets={session.targets} />
            </section>
            <section className={styles.targetSection}>
              <ul className={shared.horizontalWrapper}>
                {session.targets.map((target, index) => (
                  <li className={styles.target} key={target.id}>
                    <img src={tempImages[index]} alt="" className={styles.targetImage} />
                    <h4>{target.name}</h4>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </main>
    </>
  );
};

export { GamePage };
