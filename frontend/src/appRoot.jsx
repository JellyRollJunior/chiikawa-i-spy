import { Outlet } from 'react-router';
import { useNotifications } from './hooks/useNotifications.js';
import { NotificationContext } from './providers/notificationContext.jsx';
import { Footer } from './components/Footer/Footer.jsx';

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
      <div>
        <Outlet />
      </div>
      <Footer />
    </NotificationContext.Provider>
  );
};

export { AppRoot };
