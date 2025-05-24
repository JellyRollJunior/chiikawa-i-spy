import styles from './Notification.module.css';
import shared from '../../styles/shared.module.css';

const Notification = ({ message, style = {left: 0, right: 0}, successNotification = true }) => {
  return (
    <h3
      style={style}
      className={`${styles.notification} ${styles.fadeInfadeOut} ${
        successNotification
          ? `${shared.card} ${styles.successNotification}`
          : shared.primaryButton
      }`}
    >
      {message}
    </h3>
  );
};

export { Notification };
