import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Footer } from './Footer.jsx';

describe('Footer component', () => {
  it('renders author message and button links', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();``
  });
});
