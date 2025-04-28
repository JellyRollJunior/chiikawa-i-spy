import express from 'express';
import { gamesRouter } from './routes/gamesRouter.js';
import { winnersRouter } from './routes/winnersRouter.js';
import { ValidationError } from './errors/ValidationError.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/games', gamesRouter);
app.use('/winners', winnersRouter);

app.use((err, req, res, next) => {
    const error = {
        name: err.name,
        status: err.status ? err.status : 500,
        message: err.message,
    };
    if (err instanceof ValidationError) {
        error.validationErrors = err.validationErrors;
    }
    res.status(error.status).json(error);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
