import { check } from 'express-validator';

const INTEGER_ERROR = 'must be an integer.'
const targetValidation = [
    check('targetId').trim()
        .isInt().withMessage(`targetId ${INTEGER_ERROR}`), 
    check('x').trim()
        .isInt().withMessage(`X coordinate ${INTEGER_ERROR}`), 
    check('y').trim()
        .isInt().withMessage(`Y coordinate ${INTEGER_ERROR}`), 
];

export { targetValidation };
