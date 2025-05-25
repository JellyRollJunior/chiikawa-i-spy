import { StartPage } from './components/StartPage/StartPage.jsx';
import { GamePage } from './components/GamePage/GamePage.jsx';
import { AppRoot } from './AppRoot.jsx';

const routes = [
  {
    path: '/',
    element: <AppRoot />,
    children: [{ index: true, element: <StartPage /> }],
  },
  {
    path: '/games/:gameId',
    element: <AppRoot />,
    children: [{ index: true, element: <GamePage /> }],
  },
];

export { routes };
