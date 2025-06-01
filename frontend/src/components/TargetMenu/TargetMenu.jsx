import styles from './TargetMenu.module.css';
import shared from '../../styles/shared.module.css';

const TargetMenu = ({
  targets,
  isVisible,
  handleGuess,
  x = 0,
  y = 0,
  xPercent = 50,
}) => {
  const menuPosition = { left: x, top: y };
  menuPosition.display = isVisible ? 'block' : 'none';

  // options offset (prevent options going offscreen)
  const optionOffset = {};
  optionOffset.transform =
    xPercent >= 90
      ? `translateX(-${8 * (xPercent - 90)}px)`
      : xPercent <= 10
      ? `translateX(${8 * (10 - xPercent)}px)`
      : '';

  return (
    <div
      className={`${shared.fadeIn} ${styles.menuWrapper}`}
      style={menuPosition}
    >
      <div className={styles.menu}>
        <div className={styles.targetBox}></div>
        <ul className={styles.optionWrapper} style={optionOffset}>
          {targets &&
            targets
              .filter((target) => !target.isFound)
              .map((target) => (
                <li key={target.id}>
                  <button
                    onClick={() => handleGuess(target.id)}
                    className={`${styles.menuOption} ${shared.primaryButton}`}
                  >
                    {target.name}
                  </button>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export { TargetMenu };
