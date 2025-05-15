const createPlayer = (gameId, targetData) => {
    const startTime = new Date().toISOString();
    const targets = targetData.map((target) => {
        return { ...target, isFound: false };
    });

    return {
        gameId,
        startTime,
        targets,
    };
};

const getTargetById = (player, targetId) => {
    if (!player.targets) return player;
    return player.targets.find((target) => target.id == targetId);
}

const addFoundTarget = (player, targetId, targetX, targetY) => {
    // if targets undefined, target with targetId does not exist, or target is found, return player
    if (
        !player.targets ||
        !getTargetById(player, targetId) ||
        getTargetById(player, targetId).isFound
    ) {
        return player;
    }
    // add target found data
    const foundTarget = {
        ...getTargetById(player, targetId),
        isFound: true,
        x: targetX,
        y: targetY,
    };

    return {
        gameId: player.gameId,
        startTime: player.startTime,
        targets: [
            ...player.targets.filter((target) => target.id != targetId),
            foundTarget,
        ]
    }
};

export { createPlayer, addFoundTarget };
