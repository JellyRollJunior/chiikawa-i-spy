import { IconWrapper } from '../IconWrapper/IconWrapper';
import styles from './WinModal.module.css';
import shared from '../../styles/shared.module.css';

const WinModal = () => {
  return (
    <div className={styles.modalWrapper}>
      <div className={`${shared.card} ${styles.modal}`}>
        <form className={styles.form} action="">
          <IconWrapper size={32}>
            <h2>Winner</h2>
          </IconWrapper>
          <p>
            Wow! You found all the hidden critters in <strong className={shared.bold}> seconds</strong>
          </p>
          <p>Add your username to the leaderboards</p>
          <label className={`${shared.bold} ${shared.marginTopSmall}`} htmlFor="name">Username</label>
          <input type="text" name="name" id="name" />
          <button className={`${shared.primaryButton} ${shared.marginTopSmall}`}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export { WinModal };
