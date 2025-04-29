import dotenv from 'dotenv';
import express from 'express';
import request from 'supertest';
import jwt from 'jsonwebtoken';
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

const getGameId = async () => {
    const response = await request(app).get('/games');
    const gameId = response.body.games.filter(
        (game) => (game.name = 'chiikawa-village')
    )[0].id;
    return gameId;
};

describe('GET /games/:gameId/assets', () => {
    let gameId;
    beforeAll(async () => (gameId = await getGameId()));

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

describe('GET /games/:gameId/startTokens', () => {
    let gameId;
    beforeAll(async () => (gameId = await getGameId()));

    it('Responds with json', async () => {
        const response = await request(app).get(`/games/${gameId}/startTokens`);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.status).toEqual(200);
    });

    it('Responds with token containing player data', async () => {
        const response = await request(app).get(`/games/${gameId}/startTokens`);
        const data = jwt.verify(response.body.token, process.env.TOKEN_SECRET);
        expect(data.gameId).toStrictEqual(`${gameId}`);
        expect(data.targetsFound).toStrictEqual([]);
        expect(data.targetsNotFound).toHaveLength(2);
    });
});
