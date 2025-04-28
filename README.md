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

| METHOD | URI                   | Function                        | Body                               | Notes                                      |
| ------ | --------------------- | ------------------------------- | ---------------------------------- | ------------------------------------------ |
| GET    | /games                | Returns games                   |                                    | Returns { id, name, image URL }            |
| GET    | /games/:gameId/assets | Returns game assets and targets |                                    | Returns { ...game data, targets data }     |
| GET   | /games/:gameId/startTokens      | Get token to start game         |                                    | { startTime, targetsFound, etc. } in token |
| POST   | /games/:gameId    | Verify target coordinates       | { x: x% of image, y: y% of image } | Returns isTargetFound                      |

### Learning Outcomes

### Retrospective aka yapping

### Acknowledgements

| Usage | Source                                                                                              |
| ----- | --------------------------------------------------------------------------------------------------- |
| Specs | [The Odin Project](https://www.theodinproject.com/lessons/nodejs-where-s-waldo-a-photo-tagging-app) |

### Backend TODOS

- create winner route!
- 404 response error

### Reminder!

-   remember to do tests!
-   prop types?

### Final plans

-   image storage on supabase
