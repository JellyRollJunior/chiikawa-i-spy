import { Router } from 'express';
import * as targetController from '../controllers/targetController.js';
import { retrieveToken, verifyToken } from '../middleware/token.js';

const targetRouter = Router();

targetRouter.post(
    '/:targetId',
    retrieveToken,
    verifyToken,
    targetController.verifyTargetFound
);

export { targetRouter };
