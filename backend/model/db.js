import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getGames = async () => {
    const games = await prisma.game.findMany();
    return games;
}

const insertGame = async (name, url) => {
    const game = await prisma.game.create({
        data: {
            name,
            url,
        },
    });
    return game;
};

const insertTarget = async (gameId, name, positionX, positionY) => {
    const target = await prisma.target.create({
        data: {
            name,
            positionX,
            positionY,
            gameId,
        },
    });
    return target;
};

export { getGames, insertGame, insertTarget };
