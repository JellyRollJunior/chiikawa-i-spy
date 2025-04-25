import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

export { insertGame, insertTarget };
