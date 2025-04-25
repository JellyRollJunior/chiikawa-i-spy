class DatabaseError extends Error {
    constructor(message, status = 500) {
        super(message);
        this.name = 'DatabaseError';
        this.status = status;
    }
}

export { DatabaseError };
