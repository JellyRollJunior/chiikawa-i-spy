const player = (gameId, targets) => {
    const startTime = new Date().toISOString();
    const targetsNotFound = targets.map((target) => {
        return target.id;
    });
    const targetsFound = [];

    const addFoundTarget = (target) => {
        // remove target from not found
        targetsNotFound = targetsNotFound.filter(
            (targetId) => (targetId = target.id)
        );
        // add target to targetsFound
        targetsFound.push(target);
    };

    return { gameId, targetsNotFound, targetsFound, startTime, addFoundTarget };
};

export { player };
