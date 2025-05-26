import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Notification } from './Notification.jsx';

describe('Notification component', () => {
  it('renders message', () => {
    const { container } = render(
      <Notification id={1} message={'hello'} isError={false} isTimed={false} />
    );

    expect(container).toMatchSnapshot();
  });
});
