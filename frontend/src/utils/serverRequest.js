const SERVER_URL = 'http://localhost:3000';

const getURL = (endpoint) => {
    return `${SERVER_URL}${endpoint}`;
};

export { getURL };
