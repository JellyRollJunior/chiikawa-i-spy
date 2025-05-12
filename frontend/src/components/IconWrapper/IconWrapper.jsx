import styles from './IconWrapper.module.css';
import chiikawa from '../../assets/characterIcons/chiikawa-icon.png';
import hachiware from '../../assets/characterIcons/hachiware-icon.png';

const IconWrapper = ({ size, children }) => {
  return (
    <div className={styles.iconWrapper}>
      <img
        src={chiikawa}
        style={{ height: size, width: size }}
        alt="Chiikawa icon"
      />
      {children}
      <img
        src={hachiware}
        style={{ height: size, width: size }}
        alt="Hachiware icon"
      />
    </div>
  );
};

export { IconWrapper };
