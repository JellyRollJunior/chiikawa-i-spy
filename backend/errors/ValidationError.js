class ValidationError extends Error {
    constructor(message, errors) {
        super(message);
        this.name = 'ValidationError'
        this.validationErrors = errors;
        this.status = 400;
    }
}

export { ValidationError };
