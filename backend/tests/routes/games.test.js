import dotenv from 'dotenv';
import express from 'express';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import { gamesRouter } from '../../routes/gamesRouter';
dotenv.config();

const app = express();
app.use(express.json());

app.use('/games', gamesRouter);

const TEST_DB_TARGET_DATA = [
    {
        id: 13,
        isFound: false,
        name: 'usagi',
    },
    {
        id: 14,
        isFound: false,
        name: 'chiikawa',
    },
];

const getGameId = async () => {
    const response = await request(app).get('/games');
    const gameId = response.body.games.filter(
        (game) => (game.name = 'chiikawa-village')
    )[0].id;
    return gameId;
};

describe('GET /games', () => {
    let response;
    beforeAll(async () => {
        response = await request(app).get('/games');
    });

    it('Responds with json', async () => {
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.status).toEqual(200);
    });

    it('Responds with expected game names', async () => {
        expect(response.body.games[0].name).toStrictEqual('chiikawa-village');
        expect(response.body.games[1].name).toStrictEqual('tama-town');
    });
});

describe('GET /games/:gameId/assets', () => {
    let gameId;
    let response;
    beforeAll(async () => {
        gameId = await getGameId();
        response = await request(app).get(`/games/${gameId}/assets`);
    });

    it('Responds with json', async () => {
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.status).toEqual(200);
    });

    it('Responds with name, url, and targets', async () => {
        expect(response.body.name).toStrictEqual('chiikawa-village');
        expect(response.body.url).toStrictEqual('chiikawa-village.com');
        expect(response.body.targets[0].name).toStrictEqual('usagi');
        expect(response.body.targets[1].name).toStrictEqual('chiikawa');
    });

    it('Responds with token containing player data', async () => {
        const data = jwt.verify(response.body.token, process.env.TOKEN_SECRET);
        expect(data.gameId).toStrictEqual(`${gameId}`);
        expect(data.targets).toStrictEqual(TEST_DB_TARGET_DATA);
    });
});

describe('POST /games/:gameId/guesses', () => {
    let gameId;
    let token;
    let targetId;
    beforeAll(async () => {
        gameId = await getGameId();
        const tokenResponse = await request(app).get(
            `/games/${gameId}/startTokens`
        );
        const assetsResponse = await request(app).get(
            `/games/${gameId}/assets`
        );
        token = tokenResponse.body.token;
        targetId = assetsResponse.body.targets.find(
            (target) => target.name == 'usagi'
        ).id;
    });

    it('Responds with json', async () => {
        const response = await request(app)
            .post(`/games/${gameId}/guesses`)
            .set('Accept', 'application/json')
            .set('Authorization', `bearer ${token}`)
            .type('json')
            .send({ targetId, x: 53, y: 7 });
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.status).toEqual(200);
    });

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
        const player = jwt.verify(
            response.body.token,
            process.env.TOKEN_SECRET
        );
        expect(player.targetsNotFound.filter((id) => id == targetId)).toEqual(
            []
        );
        expect(
            player.targetsFound.filter((target) => target.id == targetId)[0]
                .name
        ).toStrictEqual('usagi');
    });

    it('Responds with false guessSuccess on incorrect guess', async () => {
        const response = await request(app)
            .post(`/games/${gameId}/guesses`)
            .set('Accept', 'application/json')
            .set('Authorization', `bearer ${token}`)
            .type('json')
            .send({ targetId, x: 0, y: 0 });
        expect(response.body.guessSuccess).toEqual(false);
    });
});
