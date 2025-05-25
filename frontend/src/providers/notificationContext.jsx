import { createContext } from 'react';

const NotificationContext = createContext({
  addNotification: () => {},
  removeNotification: () => {},
});

export { NotificationContext };
