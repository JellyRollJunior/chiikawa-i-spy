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
    // if target already found, return player
    if (player.targetsFound.find((target) => target.id == targetId)) {
        return player;
    }
    // remove target from targetsNotFound
    const targetsNotFound = player.targetsNotFound.filter(
        (id) => id != targetId
    );
    // add target data to targetsFound
    const targetsFound = [...player.targetsFound];
    targetsFound.push({
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
