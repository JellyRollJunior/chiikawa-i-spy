import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Notifications } from './Notifications.jsx';
import { NotificationContext } from '../../providers/notificationContext';

describe('Notifications component', () => {
  it('renders notification wrapper and notification', () => {
    const message = 'hello!';
    const { container } = render(
      <NotificationContext.Provider
        value={{
          notifications: [
            {
              id: 1,
              message,
              isError: false,
              isTimed: false,
            },
          ],
        }}
      >
        <Notifications />
      </NotificationContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
