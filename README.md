<h1 align="center">Chiikawa I-Spy</h1>
<h3 align="center">Play a rousing game of I Spy with Chiikawa and friends! <br>
Can you spot all the cute critters?</h3>
<p align="center">
    <img align="center" width="500px" src="./readme/gameplay.gif" >
</p>

### Description

-   I Spy game where your guesses are verified server side (so no cheating allowed!)
-   Select a game to get an image and a list of targets. Click on a target to reveal a target menu. On the menu, select the desired target to make a guess. Find all the targets to win!
-   Leaderboard records winner names and time!

### Features

-   Start page

    -   Leaderboard for 2 game modes

-   Game page

    -   Stopwatch to show score
    -   Guess success / Guess fail feedback (see gif above)
    -   Target list that updates based on found targets
    -   Target menu that does not overflow the edge of image (when target menu is opened near image edge, it will shift to stay in the image!!!! see in gif above)

-   General

    -   Network error notifications (TOOK ME A LONG TIME!)
    -   Error cards, Loading animations
    -   Footer with my links!

### App Showcase

| Winning Game (gif)                          |
| ------------------------------------------- |
| <img width="400px" src="./readme/win.gif" > |

| Start Page                                         | Loading animation (gif)                        |
| -------------------------------------------------- | ---------------------------------------------- |
| <img width="400px" src="./readme/start-page.png" > | <img width="400px" src="./readme/loading.gif"> |

| Network error notifications (gif)                     | 404 error page                              |
| ----------------------------------------------------- | ------------------------------------------- |
| <img width="400px" src="./readme/network-errors.gif"> | <img width="400px" src="./readme/404.png" > |

### Server Stack

-   NodeJS, Express
-   Prisma ORM, PostgreSQL
-   Other libraries
    -   Jest, SuperTest
    -   Jsonwebtoken
    -   dotenv
    -   express-validator

### Frontend Stack

-   React, JSX
-   CSS Modules
-   libraries
    -   react-router
    -   vitest

### Endpoints

| METHOD | URI                    | Function                            | Body                                                          | Notes                                               |
| ------ | ---------------------- | ----------------------------------- | ------------------------------------------------------------- | --------------------------------------------------- |
| GET    | /games                 | Returns all games                   |                                                               | Returns games' id, name, urls                       |
| GET    | /games/:gameId/assets  | Returns assets needed to start game |                                                               | Returns game & target data, startTime, jsonwebtoken |
| POST   | /games/:gameId/guesses | Verify target coordinates           | { targetId, x: x% of image, y: y% of image }, token           | Returns guessSucess, targetsFound, targetsNotFound  |
| GET    | /winners               | Returns winners                     |                                                               | Returns list of winners' name, time, gameId         |
| POST   | /winners               | Create winner                       | token with confirmed win data, time to win in seconds         | Returns token and time if win verified, else 403    |
| PUT    | /winners               | Rename winner                       | { name }, token with winning player data (from POST /winners) | Returns updated winner if winner verified, else 403 |

### API Gameplay loop

1. call GET /games to get available games + image urls
2. call GET /games/:gameId/assets to retrieve game data and token to start gameplay
3. call POST /games/:gameId/guesses (with token) to play the game and make guesses (until all targets found)
    - Updated token will be returned to use on future /guesses requests (if guess is successful)
4. call POST /winners once all targets founds to record win time
5. call PUT /winners to let user name the winner

### Learning Outcomes

-   Backend

    -   Practice designing API and API workflow to play game
    -   First time using SuperTest to test route responses
    -   Using a test database & production database!
    -   Normalizing image coordinates

-   Frontend

    -   Global notifications using context API
        -   any component can trigger a notification by retrieving create notification functions using context API
    -   Relearning vitest (mocking hooks/components, user events, dynamic mocks, snapshot tests)
    -   Animating react components (fade ins, fade outs)

### Retrospective aka yapping

-   I really put my all into make this a project I can showcase on my portfolio. Hope you like it!
-   I learned I prefer working on backend then frontend (else I get confused!)
    -   Next time implement all backend features (image storage) before working on the frontend
-   Designed API and API workflow myself (proud!)
-   Thought of storing player session info in jsonwebtoken myself (proud!!)
-   NOTIFICATIONS TOOK ME SO LONG BUT I DID IT I AM VERY PROUD OF MYSELF
-   I created a timer using intervals! first time using intervals

### Start commands

```bash
# Start backend server
cd backend
npm install
node app.js

# Run tests
cd backend
npm run test
```

```bash
# Start frontend react
cd frontend
npm install
npm run dev
```

### Acknowledgements

| Usage  | Source                                                                                              |
| ------ | --------------------------------------------------------------------------------------------------- |
| Images | Chiikawa                                                                                            |
| Icons  | icons8.com                                                                                          |
| Specs  | [The Odin Project](https://www.theodinproject.com/lessons/nodejs-where-s-waldo-a-photo-tagging-app) |
