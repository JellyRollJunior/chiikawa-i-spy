import { useContext, useState } from 'react';
import { NotificationContext } from '../../../providers/notificationContext.jsx';
import styles from './Notification.module.css';
import shared from '../../../styles/shared.module.css';

const Notification = ({ id, message, isError, isTimed }) => {
  const { removeNotification } = useContext(NotificationContext);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleRemoveNotification = async (id) => {
    setIsFadingOut(true);
    await new Promise((resolve) => setTimeout(resolve, 250));
    removeNotification(id);
  };

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
      <button
        className={styles.closeButton}
        onClick={isError && !isTimed ? () => handleRemoveNotification(id) : ''}
      >
        {message}
        {!isTimed && <span className={styles.closeButton}>×</span>}
      </button>
    </h3>
  );
};

export { Notification };
