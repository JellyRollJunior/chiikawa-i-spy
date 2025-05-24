import styles from './Notification.module.css';
import shared from '../../styles/shared.module.css';

const Notification = ({ message, positionStyling = {left: 0, right: 0}, successNotification = true }) => {
  return (
    <h3
      style={positionStyling}
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
