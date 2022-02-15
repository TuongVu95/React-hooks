import { combineReducer } from 'redux';

import * as types from '../type';

export const counter = (state = 0, action) => {
    const typeAction = action.type;

    switch (typeAction) {
        case types.LC_INCREMENT:
            return state + action.payload;
        case types.DECREMENT:
            return state - action.payload;
        default:
            return state;
    }
}

export default counter;