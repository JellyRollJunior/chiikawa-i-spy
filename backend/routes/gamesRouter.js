import { Router } from 'express';
import { gameIdValidation } from '../validations/gameIdValidation.js';
import { retrieveToken, verifyToken } from '../middleware/token.js';
import * as gamesController from '../controllers/gamesController.js';
import { targetValidation } from '../validations/targetValidation.js';

const gamesRouter = Router();

gamesRouter.get('/', gamesController.getGames);
gamesRouter.get(
    '/:gameId/assets',
    gameIdValidation,
    gamesController.getGameAssets
);
gamesRouter.post(
    '/:gameId/guesses',
    retrieveToken,
    verifyToken,
    targetValidation,
    gamesController.verifyUserGuess
);

export { gamesRouter };
