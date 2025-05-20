import styles from './Notification.module.css';
import shared from '../../styles/shared.module.css';

const Notification = ({ message, successNotification = true }) => {
  return (
    <h3
      className={`${styles.notification} ${shared.fadeInfadeOut} ${
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
