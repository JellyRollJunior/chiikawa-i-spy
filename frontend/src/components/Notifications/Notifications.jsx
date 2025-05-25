import { useContext } from 'react';
import { NotificationContext } from '../../providers/notificationContext.jsx';
import { Notification } from './Notification/Notification.jsx';
import styles from './Notifications.module.css';

const Notifications = ({
  style = { top: '8px', right: '6px', alignItems: 'end' },
}) => {
  const { notifications } = useContext(NotificationContext);

  return (
    <div className={styles.notificationWrapper} style={style}>
      {Array.isArray(notifications) &&
        notifications.length > 0 &&
        notifications.map((notification) => (
          <Notification
            key={notification.id}
            id={notification.id}
            message={notification.message}
            isError={notification.isError}
            isTimed={notification.isTimed}
          />
        ))}
    </div>
  );
};

export { Notifications };
