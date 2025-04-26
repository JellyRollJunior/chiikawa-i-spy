import express from 'express';
import { gamesRouter } from './routes/gamesRouter.js';
import { targetRouter } from './routes/targetRouter.js';
import { playerRouter } from './routes/playerRouter.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/games', gamesRouter);
app.use('/targets', targetRouter);
app.use('/players', playerRouter);

app.use((err, req, res, next) => {
    const error = {
        name: err.name,
        status: err.status ? err.status : 500,
        message: err.message,
    };
    res.status(error.status).json(error);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
