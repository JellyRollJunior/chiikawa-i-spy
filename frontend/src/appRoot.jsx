import { Outlet } from 'react-router';
import { useNotifications } from './hooks/useNotifications.js';
import { NotificationContext } from './providers/notificationContext.jsx';

const AppRoot = () => {
  const { notifications, addNotification, removeNotification } = useNotifications();

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      <Outlet />
    </NotificationContext.Provider>
  );
};

export { AppRoot };
