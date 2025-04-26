import { Router } from 'express';
import { gameIdValidation } from '../validations/gameIdValidation.js';
import * as playerController from '../controllers/playerController.js';

const playerRouter = Router();

playerRouter.post('/:gameId', gameIdValidation, playerController.createPlayer);

export { playerRouter };
