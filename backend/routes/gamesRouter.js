import { Router } from 'express';
import { gameIdValidation } from '../validations/gameIdValidation.js';
import { retrieveToken, verifyToken } from '../middleware/token.js';
import * as gamesController from '../controllers/gamesController.js';

const gamesRouter = Router();

gamesRouter.get('/', gamesController.getGames);
gamesRouter.get(
    '/:gameId/assets',
    gameIdValidation,
    gamesController.getGameAssets
);
gamesRouter.get(
    '/:gameId/startTokens',
    gameIdValidation,
    gamesController.getGameStartToken
);
gamesRouter.post(
    '/:gameId/guesses/:targetId',
    retrieveToken,
    verifyToken,
    gamesController.verifyUserGuess
);

export { gamesRouter };
