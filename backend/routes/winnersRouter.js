import { Router } from 'express';
import { retrieveToken, verifyToken } from '../middleware/token.js';
import { nameValidation } from '../validations/nameValidation.js';
import * as winnersController from '../controllers/winnersController.js';

const winnersRouter = Router();

winnersRouter.get('/', winnersController.getWinners);
winnersRouter.post(
    '/',
    retrieveToken,
    verifyToken,
    winnersController.postWinners
);


export { winnersRouter };
