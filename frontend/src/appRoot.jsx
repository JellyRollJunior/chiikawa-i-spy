import { Outlet } from 'react-router';
import { useNotifications } from './hooks/useNotifications.js';
import { NotificationContext } from './providers/notificationContext.jsx';

const AppRoot = () => {
  const {
    notifications,
    addPersistentNotification,
    addTimedNotification,
    removeNotification,
  } = useNotifications();

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addPersistentNotification,
        addTimedNotification,
        removeNotification,
      }}
    >
      <Outlet />
    </NotificationContext.Provider>
  );
};

export { AppRoot };
