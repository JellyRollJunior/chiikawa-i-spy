import * as player from '../../model/player.js';

describe('The player object', () => {
    test('Verify player object contains gameId, startTime, and targets', () => {
        const session = player.createPlayer(1, [
            { id: 1, name: 'targetName' },
            { id: 2, name: 'targetName' },
        ]);
        expect(session).not.toBeUndefined();
        expect(session.gameId).toBe(1);
        expect(session.startTime).not.toBeUndefined();
        expect(session.targets).not.toBeUndefined();
    });

    test('Verify adding found target marks target as found', () => {
        const session = player.createPlayer(1, [
            { id: 1, name: 'targetName' },
            { id: 2, name: 'targetName' },
        ]);
        const targetId = 2;
        const targetX = 20;
        const targetY = 40;
        let newSession = player.addFoundTarget(
            session,
            targetId,
            targetX,
            targetY
        );
        const foundTarget = newSession.targets.find(
            (target) => target.id == targetId
        );
        expect(foundTarget.isFound).toBe(true);
        expect(foundTarget.x).toBe(targetX);
        expect(foundTarget.y).toBe(targetY);
    });
});
