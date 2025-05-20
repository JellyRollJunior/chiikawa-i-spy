import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { GameImage } from './GameImage.jsx';
import chiikawaWoSagase from '../../assets/temp/chiikawa-wo-sagase.jpg';

describe('Game Image component', () => {
  it('renders game image and target menu', () => {
    const { container } = render(<GameImage url={chiikawaWoSagase} />);

    expect(container).toMatchSnapshot();
  });
});
