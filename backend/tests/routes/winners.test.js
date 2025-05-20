import dotenv from 'dotenv';
import express from 'express';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import { winnersRouter } from '../../routes/winnersRouter.js';
dotenv.config();

const app = express();
app.use(express.json());

app.use('/winners', winnersRouter);

describe('GET /winners', () => {
    let response;
    beforeAll(async () => {
        response = await request(app).get('/winners');
    });

    it('responds with json', async () => {
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.status).toEqual(200);
    });
});

describe('POST /winners, PUT /winners', () => {
    let token;

    it('responds token when confirming win with POST /winners', async () => {
        // create jsonwebtoken with winner data
        const winningPlayer = {
            gameId: '7',
            startTime: '2025-04-29T06:08:25.019Z',
            targets: [],
        };
        const winningToken = jwt.sign(winningPlayer, process.env.TOKEN_SECRET, {
            expiresIn: 60 * 2,
        });
        // POST /winners
        const response = await request(app)
            .post('/winners')
            .set('Accept', 'application/json')
            .set('Authorization', `bearer ${winningToken}`)
            .type('json');
        // expect token to be returned
        expect(response.body.token).not.toBeUndefined();
        token = response.body.token;
    });

    it('responds with created winner and adds winner to database with PUT /winners', async () => {
        const name = token.slice(0, 15);
        // PUT /winners
        const response = await request(app)
            .put('/winners')
            .set('Accept', 'application/json')
            .set('Authorization', `bearer ${token}`)
            .type('json')
            .send({ name });
        // expect response to contain winner name
        expect(response.body.winner.name).toStrictEqual(name);
        // Verify winner is added by executing GET /winners
        const responseAfter = await request(app).get('/winners');
        expect(responseAfter.body.winners.slice(-1)[0].name).toStrictEqual(
            name
        );
    });
});
