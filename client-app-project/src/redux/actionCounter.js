import * as types from './type';

export const increment = (params) => {
    return{
        type: types.LC_INCREMENT,
        payload: params
    }
}

export const decrement = (params) => {
    return{
        type: types.DECREMENT,
        payload: params
    }
}