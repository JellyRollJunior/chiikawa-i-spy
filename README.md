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
node --experimental-vm-modules node_modules/jest/bin/jest.js
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

### Frontend Stack

-   React, JSX
-   CSS Modules

### Endpoints

| METHOD | URI                        | Function                        | Body                                                | Notes                                                       |
| ------ | -------------------------- | ------------------------------- | --------------------------------------------------- | ----------------------------------------------------------- |
| GET    | /games                     | Returns games                   |                                                     | Returns games' id, name, urls                               |
| GET    | /games/:gameId/assets      | Returns game assets and targets |                                                     | Returns game & target data for /:gameId                     |
| GET    | /games/:gameId/startTokens | Get token to start game         |                                                     | Returns token with startTime, targetsFound, targetsNotFound |
| POST   | /games/:gameId/guesses     | Verify target coordinates       | { targetId, x: x% of image, y: y% of image }, token | Returns guessSucess, targetsFound, targetsNotFound          |
| GET    | /winners                   | Returns winners                 |                                                     | Returns list of winners' name, time, gameId                 |
| POST   | /winners                   | Create winner                   | { name }, token with confirmed win data             | Returns winner data if win verified, else 403               |

### Learning Outcomes

-   Normalizing image coordinates
-   First time using SuperTest to test route responses
-   Practicing Jest and Test Driven Development

### Retrospective aka yapping

-   I learned I prefer working on backend then frontend. I get really confused about what product I'm designing for doing frontend then backend.

### Acknowledgements

| Usage | Source                                                                                              |
| ----- | --------------------------------------------------------------------------------------------------- |
| Specs | [The Odin Project](https://www.theodinproject.com/lessons/nodejs-where-s-waldo-a-photo-tagging-app) |

### Backend TODOS

### Reminder!

-   remember to do tests!
-   prop types?

### Final plans

-   image storage on supabase
