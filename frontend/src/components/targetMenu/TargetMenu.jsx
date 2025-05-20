import styles from './TargetMenu.module.css';
import shared from '../../styles/shared.module.css';

const TargetMenu = ({ targets, isVisible, x, y, onGuess }) => {
  const style = { left: x, top: y };
  style.display = isVisible ? 'block' : 'none';

  return (
    <>
      <div className={`${shared.fadeIn} ${styles.menuWrapper}`} style={style}>
        <div className={styles.menu}>
          <div className={styles.targetBox}></div>
          <ul className={styles.optionWrapper}>
            {targets &&
              targets.filter((target) => !target.isFound).map((target) => (
                <li key={target.id}>
                  <button
                    onClick={() => onGuess(target.id)}
                    className={`${styles.menuOption} ${shared.primaryButton}`}
                  >
                    {target.name}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export { TargetMenu };
