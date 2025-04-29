import * as player from '../../model/player.js';

describe('The player object', () => {
    test('Verify player object contains gameId, startTime, and targetsNotFound', () => {
        const session = player.createPlayer(1, [
            { id: 1, name: 'targetName' },
            { id: 2, name: 'targetName' },
        ]);
        expect(session).not.toBeUndefined();
        expect(session.gameId).toBe(1);
        expect(session.startTime).not.toBeUndefined();
        expect(session.targetsNotFound).not.toBeUndefined();
        expect(session.targetsFound).toStrictEqual([]);
    });

    test('Verify adding found target removes target from targetNotFound', () => {
        const session = player.createPlayer(1, [
            { id: 1, name: 'targetName' },
            { id: 2, name: 'targetName' },
        ]);
        let newSession = player.addFoundTarget(session, 2, 'test name', 20, 30);
        expect(newSession.targetsNotFound).not.toContain(2);
    });

    test('Verify adding found target add targets to targetsFound', () => {
        const session = player.createPlayer(1, [
            { id: 1, name: 'targetName' },
            { id: 2, name: 'targetName' },
        ]);
        const targetId = 2;
        const targetName = 'test name';
        const targetX = 20;
        const targetY = 40;
        let newSession = player.addFoundTarget(session, targetId, targetName, targetX, targetY);
        expect(newSession.targetsFound[0].id).toBe(targetId);
        expect(newSession.targetsFound[0].name).toStrictEqual(targetName);
        expect(newSession.targetsFound[0].x).toBe(targetX);
        expect(newSession.targetsFound[0].y).toBe(targetY);
    })
});
