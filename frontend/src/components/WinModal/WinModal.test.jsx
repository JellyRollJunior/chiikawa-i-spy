import { vi, describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { WinModal } from './WinModal.jsx';
import { BrowserRouter } from 'react-router';

vi.mock('../IconWrapper/IconWrapper.jsx', () => ({
  IconWrapper: ({ children }) => {
    children;
  },
}));

describe('Win Modal component', () => {
  it('Renders win time, name input, and submit button', () => {
    const { container } = render(
      <BrowserRouter>
        <WinModal time={3} />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
