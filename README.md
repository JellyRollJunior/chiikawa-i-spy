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

| METHOD | URI            | Function                      | Body | Notes                              |
| ------ | -------------- | ----------------------------- | ---- | ---------------------------------- |
| GET    | /games         | Returns games                 |      | Returns { id, name, image URL }    |
| GET    | /games/:gameId | Returns game and game targets |      | Returns { game data, targets data} |

### Learning Outcomes

### Retrospective aka yapping

### Acknowledgements

| Usage | Source                                                                                              |
| ----- | --------------------------------------------------------------------------------------------------- |
| Specs | [The Odin Project](https://www.theodinproject.com/lessons/nodejs-where-s-waldo-a-photo-tagging-app) |

### TODOS

-   create menu
    -   display menu options based on targets in response (map)
    -   create menu base options
    -   style menu
    -   menu display side
-   style game page
    -   display target hints based on response
-   style start page
-   store images on supabase

-   coordinate normalizing? percentage of image?

todo-backed:

-   add game image URL
-   add hint image URL

### Reminder!

-   remember to do tests!
-   prop types?
