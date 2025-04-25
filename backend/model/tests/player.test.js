import * as player from '../player';

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
});
