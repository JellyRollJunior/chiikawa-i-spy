const SERVER_URL = 'http://localhost:3000';

const getUrl = (endpoint) => {
    return `${SERVER_URL}${endpoint}`;
};

export { getUrl };
