import { check } from 'express-validator';

const EMPTY_ERROR = 'must not be empty.';
const LENGTH_ERROR = 'must be between 1 and 32 characters.';
const nameValidation = [
    check('name').trim()
        .notEmpty().withMessage(`Winner name ${EMPTY_ERROR}`)
        .isLength({ min: 1, max: 32}).withMessage(`Winner name ${LENGTH_ERROR}`),
];

export { nameValidation };
