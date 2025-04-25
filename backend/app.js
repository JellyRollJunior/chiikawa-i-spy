import express from 'express';
import { gamesRouter } from './routes/gamesRouter.js';

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.use('/games', gamesRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
