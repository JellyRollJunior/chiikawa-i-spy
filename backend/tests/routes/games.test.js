import dotenv from 'dotenv';
import express from 'express';
import request from 'supertest';
import jwt from 'supertest';
import { gamesRouter } from '../../routes/gamesRouter';
import * as player from '../../model/player.js';
dotenv.config();

const app = express();
app.use(express.json());

app.use('/games', gamesRouter);

describe('GET /games', () => {
    it('Responds with json', async () => {
        const response = await request(app).get('/games');
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.status).toEqual(200);
    });

    it('Responds with expected game names', async () => {
        const response = await request(app).get('/games');
        expect(response.body.games[0].name).toStrictEqual('chiikawa-village');
        expect(response.body.games[1].name).toStrictEqual('tama-town');
    })
});
