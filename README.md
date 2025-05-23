# chiikawa-i-spy

<h1 align="center">Chiikawa I-Spy</h1>
<h3 align="center"></h3>
<p align="center">
    <img align="center" width="500px" >
</p>

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

### App Showcase

| showcase            |
| ------------------- |
| <img width="400px"> |

### Server Stack

-   NodeJS, Express
-   Prisma ORM, PostgreSQL
-   Jest, SuperTest
-   Jsonwebtoken

### Frontend Stack

-   React, JSX
-   CSS Modules

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
    -   Practicing Jest and Test Driven Development
    -   Normalizing image coordinates

-   Frontend
    -   Relearning vitest (mocking hooks/components, user events, dynamic mocks, snapshot tests)
    -   Animating react components
    -

### Retrospective aka yapping

-   I really put my all into make this a project I can showcase on my portfolio. Hope you like it!
-   I learned I prefer working on backend then frontend (else I get confused!)
-   Designed API and API workflow myself (proud!)
-   Though of storing player session info in jsonwebtoken myself (proud!!)

### Acknowledgements

| Usage | Source                                                                                              |
| ----- | --------------------------------------------------------------------------------------------------- |
| Specs | [The Odin Project](https://www.theodinproject.com/lessons/nodejs-where-s-waldo-a-photo-tagging-app) |

### Backend TODOS

-   query params

## Frontend TODOS

-   gamepage

    -   timer

-   Leaderboard
    -   tests
    -   gameId tab for each game

-   General
    -   error page, 404 page
    -   bug: target menu goes out of bounds

### Final plans

-   Extract notification to main level -> show errors in notification
    -   revamp notification system on errors
-   image storage on supabase
-   mobile view
