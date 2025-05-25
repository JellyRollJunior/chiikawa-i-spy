import { useContext } from 'react';
import { NotificationContext } from '../../providers/notificationContext.jsx';
import styles from './Notification2.module.css';
import shared from '../../styles/shared.module.css';

const Notification2 = ({
  style = { top: '8px', right: '6px', alignItems: 'end' },
}) => {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div className={styles.notificationWrapper} style={style}>
      {Array.isArray(notifications) &&
        notifications.length > 0 &&
        notifications.map((notification) => (
          <h3
            key={notification.id}
            className={`${shared.fadeIn} ${
              notification.successNotification
                ? `${shared.card} ${styles.successNotification}`
                : shared.primaryButton
            }
          `}
          >
            {notification.message}
            {!notification.successNotification && (
              <button
                className={styles.closeButton}
                onClick={() => removeNotification(notification.id)}
              >
                ×
              </button>
            )}
          </h3>
        ))}
    </div>
  );
};

export { Notification2 };
