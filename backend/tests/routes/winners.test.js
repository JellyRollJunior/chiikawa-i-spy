import dotenv from 'dotenv';
import express from 'express';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import { winnersRouter } from '../../routes/winnersRouter.js'
dotenv.config();

const app = express();
app.use(express.json());

app.use('/winners', winnersRouter);

describe('GET /winners', () => {
    it('responds with json', async () => {
        const response = await request(app).get('/winners');
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.status).toEqual(200);
    });

    it('responds with mock winner', async () => {
        const response = await request(app).get('/winners');
        expect(response.body.winners[0].name).toStrictEqual('hachiware');
    });
});

describe('POST /winners', () => {
    it('responds with created winner and adds winner to database', async () => {
        // create jsonwebtoken with winner data
        const winningPlayer = {
            gameId: '7',
            startTime: '2025-04-29T06:08:25.019Z',
            targetsNotFound: [],
            targetsFound: [],
        };
        const winningToken = jwt.sign(winningPlayer, process.env.TOKEN_SECRET, { expiresIn: 60 * 2 });
        const name = winningToken.slice(0, 15);
        // POST /winner
        const response = await request(app)
            .post('/winners')
            .set('Accept', 'application/json')
            .set('Authorization', `bearer ${winningToken}`)
            .type('json')
            .send({ name });
        expect(response.body.winner.name).toStrictEqual(name);
        // Verify winner is added by executing GET /winners
        const responseAfter = await request(app).get('/winners');
        expect(responseAfter.body.winners.slice(-1)[0].name).toStrictEqual(name);
    });
});
