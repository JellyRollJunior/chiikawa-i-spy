import { Router } from 'express';
import * as gamesController from '../controllers/gamesController.js';

const gamesRouter = Router();

gamesRouter.get('/', gamesController.getGames);
gamesRouter.get('/:gameId', gamesController.getGame);

export { gamesRouter };
