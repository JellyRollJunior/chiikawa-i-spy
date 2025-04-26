import { Router } from 'express';

const playerRouter = Router();

playerRouter.post('/', (req, res) => res.json({ message: 'hi guys' }));

export { playerRouter };
