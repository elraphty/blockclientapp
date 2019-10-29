import {
    SIGNIN,
    SIGNOUT
} from './types';

export function signIn(token) {
    return function (dispatch) {
        dispatch({
            type: SIGNIN,
            payload: token
        });

        return true;
    }
}

export function signOut() {
    return function (dispatch) {
        dispatch({
            type: SIGNOUT,
            payload: {}
        });

        return true;
    }
}

/* End of Admin Actions */