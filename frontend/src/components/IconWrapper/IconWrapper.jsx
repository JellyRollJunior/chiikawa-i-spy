import styles from './IconWrapper.module.css';
import chiikawa from '../../assets/characterIcons/chiikawa-icon.png';
import hachiware from '../../assets/characterIcons/hachiware-icon.png';
import kurimanju from '../../assets/characterIcons/kurimanju-icon.png';
import momonga from '../../assets/characterIcons/momonga-icon.png';
import rakko from '../../assets/characterIcons/rakko-icon.png';
import usagi from '../../assets/characterIcons/usagi-icon.png';

const icons = [chiikawa, hachiware, kurimanju, momonga, rakko, usagi];

const IconWrapper = ({ size, children, leftIcon = 0, rightIcon = 1 }) => {
  return (
    <div className={styles.iconWrapper}>
      <img
        src={icons[leftIcon]}
        style={{ height: size, width: size }}
        alt="Chiikawa icon"
      />
      {children}
      <img
        src={icons[rightIcon]}
        style={{ height: size, width: size }}
        alt="Hachiware icon"
      />
    </div>
  );
};

export { IconWrapper };
