import styles from './TargetMenu.module.css';

const TargetMenu = ({ isVisible, x, y }) => {
  const style = {
    left: x,
    top: y,
  };
  style.display = isVisible ? 'block' : 'none';

  return (
    <>
      <div className={styles.menu} style={style}>
        <div className={styles.targetBox}></div>
        <div className={styles.optionWrapper}>
          <button className={styles.menuOption}>I am a taasdfsadrget option</button>
          <button className={styles.menuOption}>I am a target option</button>
          <button className={styles.menuOption}>I am a target option</button>
        </div>
      </div>
    </>
  );
};

export { TargetMenu };
