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

