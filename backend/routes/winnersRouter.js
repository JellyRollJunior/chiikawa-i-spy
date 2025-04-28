import { Router } from 'express';
import { retrieveToken, verifyToken } from '../middleware/token.js';
import { winnerValidation } from '../validations/winnerValidation.js';
import * as winnersController from '../controllers/winnersController.js';

const winnersRouter = Router();

winnersRouter.get('/', winnersController.getWinners);
winnersRouter.post(
    '/',
    retrieveToken,
    verifyToken,
    winnerValidation,
    winnersController.postWinners
);

export { winnersRouter };
