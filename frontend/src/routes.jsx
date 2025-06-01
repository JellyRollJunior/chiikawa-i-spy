import { StartPage } from './pages/StartPage/StartPage.jsx';
import { GamePage } from './pages/GamePage/GamePage.jsx';
import { AppRoot } from './appRoot.jsx';
import { Error404Page } from './pages/Error404Page/Error404Page.jsx';

const routes = [
  {
    path: '/',
    element: <AppRoot />,
    children: [{ index: true, element: <StartPage /> }],
    errorElement: <Error404Page />,
  },
  {
    path: '/games/:gameId',
    element: <AppRoot />,
    children: [{ index: true, element: <GamePage /> }],
  },
];

export { routes };
