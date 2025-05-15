import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { ValidationError } from '../errors/ValidationError.js';
import * as db from '../model/db.js';
import * as player from '../model/player.js';
dotenv.config();

const getGames = async (req, res, next) => {
    try {
        const games = await db.getGames();
        res.json({ games });
    } catch (error) {
        next(error);
    }
};

const getGameAssets = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new ValidationError('Error validating gameId path parameter', errors.array());
        }
        const id = req.params.gameId;
        const game = await db.getGame(id);
        res.json( game );
    } catch (error) {
        next(error);
    }
};

const getGameStartToken = async (req, res, next) => {
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

const ERROR_MARGIN = 3;
const verifyUserGuess = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ValidationError('Error validating coordinates', errors.array());
    }
    const targetId = req.body.targetId;
    try {
        // if target does not exist, throw error
        const target = await db.getTarget(targetId);
        if (target == null) {
            const error = new Error('Target does not exist');
            error.status = 400;
            throw error;
        }
        // if user guess is within margin of error, return true
        const userGuessX = Number(req.body.x);
        const userGuessY = Number(req.body.y);
        const differenceX = Math.abs(userGuessX - target.x);
        const differenceY = Math.abs(userGuessY - target.y);
        const returnData = {};
        if (differenceX <= ERROR_MARGIN && differenceY <= ERROR_MARGIN) {
            // target found, update token
            let { exp, iat, ...updatedPlayer} = player.addFoundTarget(
                req.player,
                target.id,
                target.x,
                target.y
            );
            const token = jwt.sign(updatedPlayer, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 2 });
            // return data to client
            returnData.guessSuccess = true;
            returnData.player = updatedPlayer;
            returnData.token = token;
        } else {
            returnData.guessSuccess = false;
        }
        res.json(returnData);
    } catch (error) {
        next(error);
    }
};

export { getGames, getGameAssets, getGameStartToken, verifyUserGuess };
