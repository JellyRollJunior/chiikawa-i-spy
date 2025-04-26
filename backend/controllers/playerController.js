import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { validationResult } from 'express-validator';
import { ValidationError } from '../errors/ValidationError.js';
import * as player from '../model/player.js';
import * as db from '../model/db.js';
dotenv.config();

const createPlayer = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ValidationError('Error validating gameId path parameter', errors.array());
    }
    try {
        const gameId = req.params.gameId;
        const gameData = await db.getGame(gameId);
        if (!gameData) {
            return res.status(404).json({ message: 'Game not found.'});
        }
        const newPlayer = player.createPlayer(gameId, gameData.targets);
        const options = {
            expiresIn: 60 * 60 * 2, // 2 hours
        };
        const token = jwt.sign(newPlayer, process.env.TOKEN_SECRET, options);
        res.json({ token });
    } catch (error) {
        next(error);
    }
};

export { createPlayer };
