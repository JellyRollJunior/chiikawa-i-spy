import * as db from '../model/db.js';

const getWinners = async (req, res, next) => {
    try {
        const winners = await db.getWinners();
        res.json(winners);
    } catch (error) {
        next(error);
    }
};

export { getWinners };
