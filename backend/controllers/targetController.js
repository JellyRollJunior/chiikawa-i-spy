import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import * as db from '../model/db.js';
import * as player from '../model/player.js';
dotenv.config();

const ERROR_MARGIN = 3;
const verifyTargetFound = async (req, res, next) => {
    try {
        const targetId = req.params.targetId;
        const userGuessX = Number(req.body.x);
        const userGuessY = Number(req.body.y);
        const target = await db.getTarget(targetId);
        // if user guess is within margin of error, return true
        const differenceX = Math.abs(userGuessX - target.x);
        const differenceY = Math.abs(userGuessY - target.y);
        const returnData = {};
        if (differenceX <= ERROR_MARGIN && differenceY <= ERROR_MARGIN) {
            // target found, update token
            let { exp, iat, ...updatedPlayer} = player.addFoundTarget(
                req.player,
                target.id,
                target.name,
                target.x,
                target.y
            );
            const token = jwt.sign(updatedPlayer, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 2 });
            // return data to client
            returnData.guessSuccess = true;
            returnData.targetsFound = updatedPlayer.targetsFound;
            returnData.token = token;
        } else {
            returnData.guessSuccess = false;
        }
        res.json(returnData);
    } catch (error) {
        next(error);
    }
};

export { verifyTargetFound };
