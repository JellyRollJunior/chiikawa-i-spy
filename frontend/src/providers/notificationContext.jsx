import { createContext } from 'react';

const NotificationContext = createContext({
  notifications: [],
  addPersistentNotification: () => {},
  addTimedNotification: () => {},
  removeNotification: () => {},
});

export { NotificationContext };
