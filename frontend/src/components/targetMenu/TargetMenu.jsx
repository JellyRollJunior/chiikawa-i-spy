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
        I am a menu
      </div>
    </>
  );
};

export { TargetMenu };
