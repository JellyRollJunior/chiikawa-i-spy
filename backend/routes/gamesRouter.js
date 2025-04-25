import { Router } from 'express';
import { gameIdValidation } from '../validations/gameIdValidation.js';
import * as gamesController from '../controllers/gamesController.js';

const gamesRouter = Router();

gamesRouter.get('/', gamesController.getGames);
gamesRouter.get('/:gameId', gameIdValidation, gamesController.getGame);
gamesRouter.post('/:gameId/targets/:targetId', gameIdValidation);

export { gamesRouter };
