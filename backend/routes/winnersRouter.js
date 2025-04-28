import { Router } from 'express';
import * as winnersController from '../controllers/winnersController.js';
import { retrieveToken, verifyToken } from '../middleware/token.js';

const winnersRouter = Router();

winnersRouter.get('/', winnersController.getWinners);
winnersRouter.post('/', retrieveToken, verifyToken, winnersController.postWinners);

export { winnersRouter };
