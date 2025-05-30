import * as db from '../db.js';

const script = async () =>  {
    // Chiikawa Village
    const game = await db.insertGame('Chiikawa Village', 'chiikawa-village');
    await db.insertTarget(game.id, 'Floppy-Eared Usagi', 61, 53, 'floppy-eared-usagi');
    await db.insertTarget(game.id, 'Aura Chiikawa', 62, 23, 'aura-chiikawa');
    await db.insertTarget(game.id, 'Guitar Hachiware', 38, 35, 'guitar-hachiware');
    await db.insertTarget(game.id, 'Satapanbin Shisa', 96, 22, 'satapanbin-shisa');

    // Chiikawa Village - Hard
    const gameHard = await db.insertGame('Chiikawa Village - Hard', 'chiikawa-village');
}

script();