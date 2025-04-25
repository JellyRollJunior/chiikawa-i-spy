const createPlayer = (gameId, targets) => {
    const startTime = new Date().toISOString();
    let targetsNotFound = targets.map((target) => {
        return target.id;
    });
    const targetsFound = [];

    return {
        gameId,
        startTime,
        targetsNotFound,
        targetsFound,
    };
};

const addFoundTarget = (player, targetId, targetName, targetX, targetY) => {
    // remove target from targetsNotFound, add target data to targetsFound
    const targetsNotFound = player.targetsNotFound.filter(
        (id) => id != targetId
    );
    const targetsFound = player.targetsFound.push({
        id: targetId,
        name: targetName,
        x: targetX,
        y: targetY,
    });

    return {
        gameId: player.gameId,
        startTime: player.startTime,
        targetsNotFound,
        targetsFound,
    };
};

export { createPlayer, addFoundTarget };
