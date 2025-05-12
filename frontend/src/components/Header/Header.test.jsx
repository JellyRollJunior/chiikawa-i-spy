import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header component', () => {
  it('renders title, header element, and children elements', () => {
    const { container } = render(
      <BrowserRouter>
        <Header>
          <button>I am a child!</button>
        </Header>
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
