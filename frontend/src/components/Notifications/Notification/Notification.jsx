import { useContext, useState } from 'react';
import { NotificationContext } from '../../../providers/notificationContext.jsx';
import styles from './Notification.module.css';
import shared from '../../../styles/shared.module.css';

const Notification = ({ id, message, isError, isTimed }) => {
  const { removeNotification } = useContext(NotificationContext);
  const [isFadingOut, setIsFadingOut] = useState(false);

  return (
    <h3
      key={id}
      className={`${
        isError
          ? `${shared.primaryButton} ${shared.fadeIn}`
          : `${shared.card} ${styles.timedNotification}`
      } 
      ${isTimed && `${shared.fadeInFadeOut}`} 
      ${isFadingOut && `${shared.fadeOut}`}`}
    >
      {message}
      {isError && !isTimed && (
        <button
          className={styles.closeButton}
          onClick={async () => {
            setIsFadingOut(true);
            await new Promise((resolve) => setTimeout(resolve, 250));
            removeNotification(id);
          }}
        >
          ×
        </button>
      )}
    </h3>
  );
};

export { Notification };
