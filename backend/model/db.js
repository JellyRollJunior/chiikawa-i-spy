import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { DatabaseError } from '../errors/DatabaseError.js';
dotenv.config();

const databaseUrl =
    process.env.NODE_ENV === 'test'
        ? process.env.TEST_DATABASE_URL
        : process.env.DATABASE_URL;
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: databaseUrl,
        },
    },
});

const getGames = async () => {
    try {
        const games = await prisma.game.findMany({
            orderBy: {
                id: 'asc',
            },
        });
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
                        src: true,
                    },
                    orderBy: {
                        id: 'asc',
                    },
                },
            },
        });
        return game;
    } catch (error) {
        throw new DatabaseError('Error retrieving game', 500);
    }
};

const insertGame = async (name, src) => {
    try {
        const game = await prisma.game.create({
            data: {
                name,
                src,
            },
        });
        return game;
    } catch (error) {
        throw new DatabaseError('Error inserting game', 500);
    }
};

const getTarget = async (targetId) => {
    try {
        const target = await prisma.target.findFirst({
            where: {
                id: Number(targetId),
            },
        });
        return target;
    } catch (error) {
        throw new DatabaseError('Error retrieving target', 500);
    }
};

const insertTarget = async (gameId, name, positionX, positionY, src) => {
    try {
        const target = await prisma.target.create({
            data: {
                name,
                x: Number(positionX),
                y: Number(positionY),
                gameId,
                src,
            },
        });
        return target;
    } catch (error) {
        throw new DatabaseError('Error inserting target', 500);
    }
};

const getWinners = async () => {
    try {
        const winners = await prisma.$queryRaw`
            SELECT *,  EXTRACT(EPOCH FROM ("endTime" - "startTime")) AS seconds
            FROM "Winner"
            ORDER BY seconds ASC
        `;
        return winners;
    } catch (error) {
        throw new DatabaseError('Error retrieving winners', 500);
    }
};

const getWinnerById = async (id) => {
    try {
        const winners = await prisma.$queryRaw`
            SELECT *,  EXTRACT(EPOCH FROM ("endTime" - "startTime")) AS seconds
            FROM "Winner"
            WHERE id = ${Number(id)}
            ORDER BY seconds ASC
        `;
        return winners;
    } catch (error) {
        throw new DatabaseError('Error retrieving winners', 500);
    }
}

const insertWinner = async (name, startTime, endTime, gameId) => {
    try {
        const winner = await prisma.winner.create({
            data: {
                name,
                startTime,
                endTime,
                gameId: Number(gameId),
            },
        });
        const fullWinner = await getWinnerById(winner.id);
        return fullWinner[0];
    } catch (error) {
        throw new DatabaseError('Error inserting winner', 500);
    }
};

const updateWinner = async (id, name) => {
    try {
        const winner = await prisma.winner.update({
            where: {
                id: Number(id),
            },
            data: {
                name: name,
            },
        });
        return winner;
    } catch (error) {
        throw new DatabaseError('Error updating winner', 500);
    }
};

export {
    getGames,
    getGame,
    insertGame,
    getTarget,
    insertTarget,
    getWinners,
    insertWinner,
    updateWinner,
};
