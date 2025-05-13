import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { IconWrapper } from './IconWrapper.jsx';
import { icons } from './icons.js';

describe('IconWrapper component', () => {
  it('renders icons to left and right of child element', () => {
    const { container } = render(
      <IconWrapper>
        <button>I am a child!</button>
      </IconWrapper>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders icons based on icon index', () => {
    const leftIndex = 2;
    const rightIndex = 3;
    render(<IconWrapper leftIcon={leftIndex} rightIcon={rightIndex} />);

    const leftIconImg = screen.getAllByRole('img')[0].src.split('/').pop();
    const rightIconImg = screen.getAllByRole('img')[1].src.split('/').pop();
    expect(leftIconImg).toStrictEqual(icons[leftIndex].split('/').pop());
    expect(rightIconImg).toStrictEqual(icons[rightIndex].split('/').pop());
  });
});
