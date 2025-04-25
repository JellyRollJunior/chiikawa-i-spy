import { Router } from 'express';
import * as targetController from '../controllers/targetController.js';

const targetRouter = Router();

targetRouter.post('/:targetId', targetController.verifyTargetFound);

export { targetRouter };
