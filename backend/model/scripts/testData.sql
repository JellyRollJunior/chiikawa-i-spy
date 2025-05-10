-- games
INSERT INTO "Game" (name, url)
VALUES 
    ('chiikawa-village', 'chiikawa-village.com'), 
    ('tama-town', 'tama-town.com');

-- targets
INSERT INTO "Target" (name, x, y, "gameId")
VALUES 
    ('usagi', '53', '7', 1), 
    ('chiikawa', '8', '8', 1), 
    ('kuchipachi', '6', '9', 2), 
    ('mametchi', '20', '60', 2);

-- winners
INSERT INTO "Winner" (name, "startTime", "endTime", "gameId")
VALUES 
    ('hachiware', '2025-04-28 00:00:00', NOW(), 1), 
    ('kurimanju', '2025-04-28 00:00:00', NOW(), 1), 
    ('mimitchi', '2025-04-28 00:00:00', NOW(), 2), 
    ('memetchi', '2025-04-28 00:00:00', NOW(), 2);