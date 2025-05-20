import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Notification } from './Notification.jsx';

describe('Notification component', () => {
  it('renders header with message and success styling by default', () => {
    const { container } = render(<Notification message="Hello" />);
    
    expect(container).toMatchSnapshot();
  });
});
