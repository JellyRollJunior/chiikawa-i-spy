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

| METHOD | URI                        | Function                        | Body                                                | Notes                                                              |
| ------ | -------------------------- | ------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------ |
| GET    | /games                     | Returns games                   |                                                     | Returns games' id, name, urls                                      |
| GET    | /games/:gameId/assets      | Returns game assets and targets |                                                     | Returns game & target data for /:gameId                            |
| GET    | /games/:gameId/startTokens | Get token to start game         |                                                     | Returns jsonwebtoken with startTime, targetsFound, targetsNotFound |
| POST   | /games/:gameId/guesses     | Verify target coordinates       | { targetId, x: x% of image, y: y% of image }, token | Returns guessSucess, targetsFound, targetsNotFound                 |
| GET    | /winners                   | Returns winners                 |                                                     | Returns list of winners' name, time, gameId                        |
| POST   | /winners                   | Create winner                   | { name }, token with confirmed win data             | Returns winner data if win verified, else 403                      |

### API Gameplay loop

1. call GET /games to get available games + image urls
2. call GET /games/:gameId/assets to retrieve targets for desired game
3. call GET /games/:gameId/startTokens to retrieve token to start gameplay
4. call POST /games/:gameId/guesses to play the game and make guesses (until all targets found)
5. call POST /winners once all targets founds to record win time

### Learning Outcomes

-   Backend
    -   Practice designing API and API workflow to play game
    -   First time using SuperTest to test route responses
    -   Practicing Jest and Test Driven Development
    -   Normalizing image coordinates

-   Frontend
    -   Relearning vitest (mocking hooks/components, user events, dynamic mocks, snapshot tests)

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
-   games orderby id

## Frontend TODOS

- Header
    - create header title
    - create header buttons
    - header buttons accept children
    - style header

- position loading message
- position error message
- position title 
- button transition time

-   prop types
-   menu disappear on click anywhere?
-   style errors

### Final plans

-   image storage on supabase
