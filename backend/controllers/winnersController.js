import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { ValidationError } from '../errors/ValidationError.js';
import * as db from '../model/db.js';
dotenv.config();

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
    try {
        // confirm win
        const player = req.player;
        if (
            player.targets.filter((target) => target.isFound == false).length !=
            0
        ) {
            const error = new Error('Player has not found all targets.');
            error.status = 403;
            throw error;
        }
        // insert winner
        const winner = await db.insertWinner(
            'Anonymous mob character',
            player.startTime,
            endTime,
            player.gameId
        );
        const options = {
            expiresIn: 60 * 2, // 2 mins
        };
        const token = jwt.sign({ id: winner.id }, process.env.TOKEN_SECRET, options);
        res.json({ token, seconds: winner.seconds });
    } catch (error) {
        next(error);
    }
};

const putWinners = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ValidationError('Error validating name', errors.array());
    }
    try {
        // verify winner
        const winner = req.player;
        if (!winner.id) {
            const error = new Error('Player has not found all targets.');
            error.status = 403;
            throw error;
        }
        // update winner name
        const name = req.body.name;
        const updatedWinner = await db.updateWinner(winner.id, name);
        res.json({ winner: updatedWinner });
    } catch (error) {
        next(error);
    }
};

export { getWinners, postWinners, putWinners };
