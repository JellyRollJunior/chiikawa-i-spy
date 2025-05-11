import { vi, describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import { StartPage } from './StartPage.jsx';

const GAME_DATA = [
  {
    id: 1,
    name: 'Chiikawa Village',
    url: 'www.chiikawa.com',
  },
  {
    id: 3,
    name: 'Chiikawa Village - Hard',
    url: 'test',
  },
];

describe('Start page', () => {
  it('renders title and games', () => {
    // Mock game data
    vi.mock('../../hooks/useGames.js', () => ({
      useGames: () => {
        return {
          games: GAME_DATA,
          loading: false,
          error: null,
        };
      },
    }));
    const { container } = render(
      <BrowserRouter>
        <StartPage />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
