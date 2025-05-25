import { createContext } from 'react';

const NotificationContext = createContext({
  notifications: [],
  addNotification: () => {},
  removeNotification: () => {},
  addTimedNotification: () => {},
});

export { NotificationContext };
