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

export { retrieveToken };
