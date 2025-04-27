import dotenv from 'dotenv'
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
            returnData.isTargetFound = true;            
            returnData.target = target;
            // update token
            const updatedPlayer = player.addFoundTarget(req.player, targetId, target.name, target.x, target.y);
            const options = {
                expiresIn: 60 * 60 * 2, // 2 hours
            };
            const token = jwt.sign(updatedPlayer, process.env.TOKEN_SECRET, options);
            returnData.token = token;
        } else {
            returnData.isTargetFound = false;
        }
        res.json(returnData);
    } catch (error) {
        next(error);
    }
};

export { verifyTargetFound };