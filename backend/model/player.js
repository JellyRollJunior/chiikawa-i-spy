const player = (gameId, targets) => {
    const gameId = gameId;
    const startTime = new Date().toISOString();
    const targetsNotFound = targets.map((target) => {
        return target.id;
    });
    const targetsFound = [];

    const getGameId = () => gameId;
    const getStartTime = () => startTime;
    const getTargetsNotFound = () => targetsNotFound;
    const getTargetsFound = () => targetsFound;
    
    const addFoundTarget = (target) => {
        // remove target from not found
        targetsNotFound = targetsNotFound.filter(
            (targetId) => (targetId = target.id)
        );
        // add target to targetsFound
        targetsFound.push(target);
    };

    return { getGameId, getStartTime, getTargetsNotFound, getTargetsFound, addFoundTarget };
};

export { player };
