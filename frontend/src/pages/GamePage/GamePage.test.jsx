import { vi, describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { GamePage } from './GamePage.jsx';

const ASSETS_DATA = {
  gameId: 1,
  name: 'Chiikawa Village',
  url: 'www.chiikawa.com',
  startTime: '2025-05-20T03:17:39.657Z',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnYW1lSWQiOiIxIiwic3RhcnRUaW1lIjoiMjAyNS0wNS0yMFQwMzoxNzozOS42NTdaIiwidGFyZ2V0cyI6W3siaWQiOjMsIm5hbWUiOiJGbG9wcHktRWFyZWQgVXNhZ2kiLCJpc0ZvdW5kIjpmYWxzZX0seyJpZCI6NCwibmFtZSI6IlNhdGFwYW5iaW4gU2hpc2EiLCJpc0ZvdW5kIjpmYWxzZX0seyJpZCI6NSwibmFtZSI6Ikd1aXRhciBIYWNoaXdhcmUiLCJpc0ZvdW5kIjpmYWxzZX0seyJpZCI6NiwibmFtZSI6IkF1cmEgQ2hpaWthd2EiLCJpc0ZvdW5kIjpmYWxzZX1dLCJpYXQiOjE3NDc3MTEwNTksImV4cCI6MTc0NzcxODI1OX0._cRUGUd4GEIjN49G0WBiIVhtbYWQLP2gSVAWalRhcNk',
};

const TARGETS_DATA = [
  {
    id: 3,
    name: 'Floppy-Eared Usagi',
    isFound: false,
  },
  {
    id: 4,
    name: 'Satapanbin Shisa',
    isFound: false,
  },
  {
    id: 5,
    name: 'Guitar Hachiware',
    isFound: false,
  },
  {
    id: 6,
    name: 'Aura Chiikawa',
    isFound: false,
  },
];

const mocks = vi.hoisted(() => {
  return {
    data: {},
  };
});

vi.mock('../../hooks/useGameSession.js', () => ({
  useGameSession: () => mocks.data,
}));

vi.mock('../../components/Header/Header.jsx', () => ({
  Header: ({ children }) => <header>{children}</header>
}));

vi.mock('../../components/Stopwatch/Stopwatch.jsx', () => ({
  Stopwatch: () => <h3>00:00:00</h3>
}));

vi.mock('../../components/IconWrapper/IconWrapper.jsx', () => ({
  IconWrapper: ({ children }) => <div>{children}</div>,
}));

vi.mock('../../components/GameImage/GameImage.jsx', () => ({
  GameImage: ({ url }) => <img src={url} />,
}));

vi.mock('../../components/TargetsGallery/TargetsGallery.jsx', () => ({
  TargetsGallery: () => <div>Targets Gallery!</div>,
}));

vi.mock('../../components/Footer/Footer.jsx', () => ({
  Footer: () => <></>,
}));

describe('Game Page', () => {
  it('render page with header, game name, GameImage component, and targets', () => {
    mocks.data = {
      assets: ASSETS_DATA,
      targets: TARGETS_DATA,
      loading: false,
      error: null,
    };
    const { container } = render(<GamePage />);

    expect(container).toMatchSnapshot();
  });
});
