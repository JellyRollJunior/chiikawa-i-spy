import { StartPage } from './components/StartPage/StartPage';
import { GamePage } from './components/GamePage/GamePage';

const routes = [
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/games/:gameId',
    element: <GamePage />,
  },
];

export { routes };
