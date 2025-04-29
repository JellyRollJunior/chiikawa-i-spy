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
    });
});

describe('GET /games/:gameId/assets', () => {
    let gameId;
    beforeAll(async () => {
        const response = await request(app).get('/games');
        gameId = response.body.games.filter(
            (game) => (game.name = 'chiikawa-village')
        )[0].id;
    })

    it('Responds with json', async () => {
        const response = await request(app).get(`/games/${gameId}/assets`);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.status).toEqual(200);
    });

    it('Responds with name, url, and targets', async () => {
        const response = await request(app).get(`/games/${gameId}/assets`);
        expect(response.body.name).toStrictEqual('chiikawa-village');
        expect(response.body.url).toStrictEqual('chiikawa-village.com');
        expect(response.body.targets[0].name).toStrictEqual('usagi');
        expect(response.body.targets[1].name).toStrictEqual('chiikawa');
    });
});
