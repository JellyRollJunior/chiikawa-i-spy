const makeRequest = async (endpoint, options) => {
    const response = await fetch(endpoint, options);
    const json = await response.json();
    if (!response.ok) {
        const error = new Error(json.name);
        error.status = json.status;
        error.message = json.message;
        throw error;
    }
    return json;
};

export { makeRequest };
