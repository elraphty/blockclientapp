import { SIGNIN, SIGNOUT } from '../actions/types';

const initialState = {
    data: {
      token: null,
      id: null
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
                data: action.payload
            }
        case SIGNOUT:
            return {
                ...state,
                data: {
                    token: null,
                    id: null
                }
            }
        default:
            return state;
    }
}