import { vi, describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Error404Page } from './Error404Page.jsx';
import { BrowserRouter } from 'react-router';

vi.mock('../../components/Header/Header.jsx', () => ({
  Header: () => <header>I am a header</header>,
}));

vi.mock('../../components/Footer/Footer.jsx', () => ({
  Footer: ({ children }) => children
}));

vi.mock('../../components/IconWrapper/IconWrapper.jsx', () => ({
  IconWrapper: ({ children }) => {
    children;
  },
}));

describe('Error 404 page', () => {
  it('renders header, footer, error message, return home button', () => {
    const { container } = render(
      <BrowserRouter>
        <Error404Page />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
