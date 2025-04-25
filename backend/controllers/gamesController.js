import * as db from '../model/db.js';

const getGames = async (req, res, next) => {
    try {
        const games = await db.getGames();
        res.json(games);
    } catch (error) {
        next(error);
    }
};

const getGame = async (req, res, next) => {
    try {
        const id = req.params.gameId;
        const game = await db.getGame(id);
        res.json(game);
    } catch (error) {
        next(error);
    }
}

export { getGames, getGame };
