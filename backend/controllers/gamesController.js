import * as db from '../model/db.js';

const getGames = async (req, res, next) => {
    try {
        const games = await db.getGames();
        res.json(games);
    } catch (error) {
        next(error);
    }
};

export { getGames };
