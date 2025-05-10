import * as db from '../db.js'

const main = async (gameId) => {
    await db.insertTarget(gameId, 'Floppy Eared Usagi', 61, 53)
};

const GAME_ID = 1;
main(GAME_ID);