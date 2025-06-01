const SERVER_URL = 'http://i-spy-chiikawa.koyeb.app';

const getUrl = (endpoint) => {
    return `${SERVER_URL}${endpoint}`;
};

export { getUrl };
