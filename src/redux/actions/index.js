import {
    SIGNIN,
    SIGNOUT
} from './types';

export function signIn(data) {
    return function (dispatch) {
        dispatch({
            type: SIGNIN,
            payload: data
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