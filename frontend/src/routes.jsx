import { StartPage } from './components/StartPage/StartPage';
import { GamePage } from './components/GamePage/GamePage';

const routes = [
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/game',
    element: <GamePage />,
  },
];

export { routes };
