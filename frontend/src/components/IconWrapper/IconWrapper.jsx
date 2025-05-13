import styles from './IconWrapper.module.css';
import { icons } from './icons.js';

const IconWrapper = ({ children, size, margin = 12, leftIcon = 0, rightIcon = 1 }) => {
  if (leftIcon < 0 || leftIcon >= icons.length) leftIcon = 0;
  if (rightIcon < 0 || rightIcon >= icons.length) rightIcon = 0;
  
  return (
    <div className={styles.iconWrapper}>
      <img
        src={icons[leftIcon]}
        style={{ height: size, width: size, marginRight: margin }}
        alt="Chiikawa character icon"
      />
      {children}
      <img
        src={icons[rightIcon]}
        style={{ height: size, width: size, marginLeft: margin }}
        alt="Chiikawa character icon"
      />
    </div>
  );
};

export { IconWrapper };
