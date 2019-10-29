import { SIGNIN, SIGNOUT } from '../actions/types';

const initialState = {
    token: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
                token: action.payload
            }
        case SIGNOUT:
            return {
                ...state,
                token: null
            }
        default:
            return state;
    }
}