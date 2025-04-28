import { Router } from 'express';
import * as winnersController from '../controllers/winnersController.js';

const winnersRouter = Router();

winnersRouter.get('/', winnersController.getWinners);

export { winnersRouter };
