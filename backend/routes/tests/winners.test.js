import express from 'express';
import { winnersRouter } from '../winnersRouter';
import request from 'supertest';

const app = express();

app.use('/winners', winnersRouter);

test('The winners route', done => {
    request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200, done);
});
