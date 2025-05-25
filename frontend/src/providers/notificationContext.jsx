import { createContext } from 'react';

const NotificationContext = createContext({
  addNotification: () => {},
});

export { NotificationContext };
