const SERVER_URL = 'https://i-spy-chiikawa.koyeb.app';

const getUrl = (endpoint) => {
    return `${SERVER_URL}${endpoint}`;
};

export { getUrl };
