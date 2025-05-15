import { validationResult } from 'express-validator';
import * as db from '../model/db.js';
import { ValidationError } from '../errors/ValidationError.js';

const getWinners = async (req, res, next) => {
    try {
        const winners = await db.getWinners();
        res.json({ winners });
    } catch (error) {
        next(error);
    }
};

const postWinners = async (req, res, next) => {
    const endTime = new Date();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ValidationError('Error validating winner name', errors.array());
    }
    try {
        // confirm win
        const player = req.player;
        if (player.targets.filter((target) => target.isFound == false).length != 0) {
            const error = new Error('Player has not found all targets.');
            error.status = 403;
            throw error;
        }
        // insert winner
        const name = req.body.name;
        const winner = await db.insertWinner(name, player.startTime, endTime, player.gameId);
        res.json({ winner });
    } catch (error) {
        next(error);
    }
};

export { getWinners, postWinners };
