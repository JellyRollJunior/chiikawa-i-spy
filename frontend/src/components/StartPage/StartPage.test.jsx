import { vi, describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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

const mocks = vi.hoisted(() => {
  return {
    data: {},
  };
});

// Mock fetch data
vi.mock('../../hooks/useGames.js', () => ({
  useGames: () => mocks.data,
}));

describe('Start page', () => {
  it('renders title and games', () => {
    // mock game data
    mocks.data = { games: GAME_DATA, loading: false, error: null };
    const { container } = render(
      <BrowserRouter>
        <StartPage />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders loading text when fetching data', () => {
    // mock loading state
    mocks.data = { games: null, loading: true, error: null };
    render(
      <BrowserRouter>
        <StartPage />
      </BrowserRouter>
    );

    expect(screen.getByText('Loading games')).toBeInTheDocument();
  });
});
