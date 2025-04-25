import * as db from '../model/db.js';

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
        } else {
            returnData.isTargetFound = false;
        }
        res.json(returnData);
    } catch (error) {
        next(error);
    }
};

export { verifyTargetFound };