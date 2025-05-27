import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ErrorElement } from './ErrorElement.jsx';

describe('Error element component', () => {
  it('renders title, character image, quote, and children', () => {
    const { container } = render(
      <ErrorElement error={'error!'} msgId={0}>
        <button>I am a child</button>
      </ErrorElement>
    );

    expect(container).toMatchSnapshot();
  });
});
