import { vi, describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Leaderboard } from './Leaderboard.jsx';

const GAME_2_NAME = 'game 2';
const GAME_2_PLAYER = 'usagi';
const GAME_DATA = [
  {
    id: 1,
    name: 'game 1',
  },
  {
    id: 2,
    name: GAME_2_NAME,
  },
];
const WINNER_DATA = [
  {
    gameId: 1,
    id: 30,
    name: 'Anonymous mob character',
    seconds: '7.383',
  },
  {
    gameId: 2,
    id: 13,
    name: GAME_2_PLAYER,
    seconds: '11.327',
  },
];

vi.mock('../../hooks/useWinners.js', () => ({
  useWinners: () => {
    return { winners: WINNER_DATA };
  },
}));

vi.mock('../IconWrapper/IconWrapper.jsx', () => ({
  IconWrapper: ({ children }) => children,
}));

describe('Leaderboard component', () => {
  it('renders title, game buttons, and winners', () => {
    const { container } = render(<Leaderboard games={GAME_DATA} />);

    expect(container).toMatchSnapshot();
  });

  it('renders winner from game 2 when game 2 button is clicked', async () => {
    render(<Leaderboard games={GAME_DATA} />)
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: GAME_2_NAME }));

    expect(screen.getByRole('heading', { name: GAME_2_PLAYER})).toBeInTheDocument();
  })
});
