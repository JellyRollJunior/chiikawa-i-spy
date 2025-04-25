import { Router } from 'express';
import * as gamesController from '../controllers/gamesController.js';

const gamesRouter = Router();

gamesRouter.get('/', gamesController.getGames);

export { gamesRouter };
