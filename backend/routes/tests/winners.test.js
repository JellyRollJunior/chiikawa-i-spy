import express from 'express';
import { winnersRouter } from '../winnersRouter';
import request from 'supertest';

const app = express();

app.use('/winners', winnersRouter);
