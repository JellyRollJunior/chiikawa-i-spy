import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { IconWrapper } from './IconWrapper.jsx';

describe('IconWrapper component', () => {
  it('Renders icons to left and right of child element', () => {
    const { container } = render(
      <IconWrapper>
        <button>I am a child!</button>
      </IconWrapper>
    );

    expect(container).toMatchSnapshot();
  });
});
