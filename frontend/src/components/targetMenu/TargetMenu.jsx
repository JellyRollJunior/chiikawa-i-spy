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
        <button className={styles.menuOption}>I am a target option</button>
        <button className={styles.menuOption}>I am a target option</button>
        <button className={styles.menuOption}>I am a target option</button>
      </div>
    </>
  );
};

export { TargetMenu };
