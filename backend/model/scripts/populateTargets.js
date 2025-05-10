import * as db from '../db.js'

const main = async (gameId) => {
    await db.insertTarget(gameId, 'Floppy-Eared Usagi looking left', 61, 53);
    await db.insertTarget(gameId, 'Shisa eating satapanbin~', 96, 22);
    await db.insertTarget(gameId, 'Hachiware playing guitar', 38, 35);
    await db.insertTarget(gameId, 'Chiikawa with aura', 62, 23);
};

const GAME_ID = 1;
main(GAME_ID);