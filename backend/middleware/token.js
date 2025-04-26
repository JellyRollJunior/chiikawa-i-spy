import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const retrieveToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');        
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        const error = new Error('Token not found.');
        error.status = 400
        next(error);
    }
};

const verifyToken = (req, res, next) => {
    try {
        const data = jwt.verify(req.token, process.env.TOKEN_SECRET);
        req.player = data;
        next();
    } catch (err) {
        const error = new Error('Invalid token.');
        error.status = 400;
        next(error);
    }
}

export { retrieveToken, verifyToken };
