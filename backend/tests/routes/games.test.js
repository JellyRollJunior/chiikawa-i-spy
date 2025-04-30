import dotenv from 'dotenv';
import express from 'express';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import { gamesRouter } from '../../routes/gamesRouter';
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

describe('POST /games/:gameId/guesses', () => {
    let gameId;
    let token;
    let targetId;
    beforeAll(async () => {
        gameId = await getGameId();
        const tokenResponse = await request(app).get(`/games/${gameId}/startTokens`);
        const assetsResponse = await request(app).get(`/games/${gameId}/assets`)
        token = tokenResponse.body.token;
        targetId = assetsResponse.body.targets.find((target) => target.name == 'usagi').id;
    })

    it('Responds with json', async () => {
        const response = await request(app)
            .post(`/games/${gameId}/guesses`)
            .set('Accept', 'application/json')
            .set('Authorization', `bearer ${token}`)
            .type('json')
            .send({ targetId, x: 53, y: 7 });
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.status).toEqual(200);
    })

    it('Responds with guessSuccess, targetsFound, and updated token on successful guess', async () => {
        const response = await request(app)
            .post(`/games/${gameId}/guesses`)
            .set('Accept', 'application/json')
            .set('Authorization', `bearer ${token}`)
            .type('json')
            .send({ targetId, x: 53, y: 7 });
        // verify response data
        expect(response.body.guessSuccess).toEqual(true);
        expect(response.body.targetsFound[0].id).toStrictEqual(targetId);
        expect(response.body.targetsFound[0].name).toStrictEqual('usagi');
        // verify token data
        const player = jwt.verify(response.body.token, process.env.TOKEN_SECRET);
        expect(player.targetsNotFound.filter(id => id == targetId)).toEqual([]);
        expect(player.targetsFound.filter(target => target.id == targetId)[0].name).toStrictEqual('usagi');
    })

    it('Responds with false guessSuccess on incorrect guess', async () => {
        const response = await request(app)
            .post(`/games/${gameId}/guesses`)
            .set('Accept', 'application/json')
            .set('Authorization', `bearer ${token}`)
            .type('json')
            .send({ targetId, x: 0, y: 0 });
        expect(response.body.guessSuccess).toEqual(false);
    })
})