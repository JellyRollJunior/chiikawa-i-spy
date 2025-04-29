import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { DatabaseError } from '../errors/DatabaseError.js';
dotenv.config();

const databaseUrl =
    // process.env.NODE_ENV === 'test'
    //     ? 
    process.env.TEST_DATABASE_URL
        // : process.env.DATABASE_URL;
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: databaseUrl,
        },
    },
});

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

const insertTarget = async (gameId, name, positionX, positionY) => {
    try {
        const target = await prisma.target.create({
            data: {
                name,
                x: positionX,
                y: positionY,
                gameId,
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
        `;
        return winners;
    } catch (error) {
        throw new DatabaseError('Error retrieving winners', 500);
    }
};

const insertWinner = async (name, startTime, endTime) => {
    try {
        const winner = await prisma.winner.create({
            data: {
                name,
                startTime,
                endTime,
            },
        });
        return winner;
    } catch (error) {
        throw new DatabaseError('Error inserting winner', 500);
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
};
