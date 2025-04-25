import { check } from "express-validator";

const EMPTY_ERROR = 'must not be empty.';
const NUMERIC_ERROR = 'must be numeric.';
const gameIdValidation = [
    check('gameId').trim()
        .notEmpty().withMessage(`Game ID ${EMPTY_ERROR}`)
        .isNumeric().withMessage(`Game ID ${NUMERIC_ERROR}`),
];

export { gameIdValidation };