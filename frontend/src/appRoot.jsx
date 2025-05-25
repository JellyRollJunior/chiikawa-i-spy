import { Outlet } from 'react-router';
import { useNotifications } from './hooks/useNotifications.js';
import { NotificationContext } from './providers/notificationContext.jsx';

const AppRoot = () => {
  const {
    notifications,
    addNotification,
    addTimedNotification,
    removeNotification,
  } = useNotifications();

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        addTimedNotification,
        removeNotification,
      }}
    >
      <Outlet />
    </NotificationContext.Provider>
  );
};

export { AppRoot };
