import { PrismaClient } from '@prisma/client';
import { DatabaseError } from '../errors/DatabaseError.js';

const prisma = new PrismaClient();

const getGames = async () => {
    try {
        const games = await prisma.game.findMany();
        return games;
    } catch (error) {
        throw new DatabaseError('Error retrieving games', 500);
    }
};

const getGame = async (id) => {
    try {
        const game = await prisma.game.findFirst({
            where: {
                id: Number(id),
            },
            include: {
                targets: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
        return game;
    } catch (error) {
        throw new DatabaseError('Error retrieving game', 500);
    }
};

const insertGame = async (name, url) => {
    try {
        const game = await prisma.game.create({
            data: {
                name,
                url,
            },
        });
        return game;
    } catch (error) {
        throw new DatabaseError('Error inserting game', 500);
    }
};

const insertTarget = async (gameId, name, positionX, positionY) => {
    try {
        const target = await prisma.target.create({
            data: {
                name,
                positionX,
                positionY,
                gameId,
            },
        });
        return target;
    } catch (error) {
        throw new DatabaseError('Error inserting target', 500);
    }
};

export { getGames, getGame, insertGame, insertTarget };
