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

export { insertGame };
