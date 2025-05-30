import * as db from '../db.js';

const script = async () =>  {
    // Chiikawa Village
    const game = await db.insertGame('Chiikawa Village', 'https://pnvfnluogmsmsucyttsj.supabase.co/storage/v1/object/public/files//chiikawa-village.jpg');
    await db.insertTarget(game.id, 'Floppy-Eared Usagi', 61, 53, 'https://pnvfnluogmsmsucyttsj.supabase.co/storage/v1/object/public/files//floppy-ear-usagi.jpg');
    await db.insertTarget(game.id, 'Aura Chiikawa', 62, 23, 'https://pnvfnluogmsmsucyttsj.supabase.co/storage/v1/object/public/files//aura-chiikawa.jpg');
    await db.insertTarget(game.id, 'Guitar Hachiware', 38, 35, 'https://pnvfnluogmsmsucyttsj.supabase.co/storage/v1/object/public/files//guitar-hachiware.jpg');
    await db.insertTarget(game.id, 'Satapanbin Shisa', 96, 22, 'https://pnvfnluogmsmsucyttsj.supabase.co/storage/v1/object/public/files//satapanbin-shisa.jpg');

    // Chiikawa Village - Hard
    const gameHard = await db.insertGame('Chiikawa Village - Hard', 'https://pnvfnluogmsmsucyttsj.supabase.co/storage/v1/object/public/files//chiikawa-village.jpg');
    await db.insertTarget(gameHard.id, 'Cool Rakko', 86, 40, 'https://pnvfnluogmsmsucyttsj.supabase.co/storage/v1/object/public/files//cool-rakko.jpg');
    await db.insertTarget(gameHard.id, 'Dancing Shisa', 20, 54, 'https://pnvfnluogmsmsucyttsj.supabase.co/storage/v1/object/public/files//dancing-shisa.jpg');
    await db.insertTarget(gameHard.id, 'Plotting Momonga', 15, 29, 'https://pnvfnluogmsmsucyttsj.supabase.co/storage/v1/object/public/files//plotting-momonga.jpg');
    await db.insertTarget(gameHard.id, 'Gourmet Kurimanju', 42, 42, 'https://pnvfnluogmsmsucyttsj.supabase.co/storage/v1/object/public/files//gourmet-kurimanju.jpg');
}

script();