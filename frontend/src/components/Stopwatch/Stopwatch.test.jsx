import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Stopwatch } from './Stopwatch.jsx';

describe('Stopwatch component', () => {
  it('Renders time in format mm:ss:cs', () => {
    const now = new Date();
    const { container } = render(
      <Stopwatch startTime={now} isRunning={false} />
    );

    expect(container).toMatchSnapshot();
  });
});
