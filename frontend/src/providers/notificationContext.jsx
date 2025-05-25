import { createContext } from 'react';

const NotificationContext = createContext({
  notifications: [],
  addErrorNotification: () => {},
  addTimedNotification: () => {},
  removeNotification: () => {},
});

export { NotificationContext };
