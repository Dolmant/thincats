// @flow
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {reducer as toastrReducer} from 'react-redux-toastr';
import URLReducer from './URLReducers';
// import CombinedIdentitiiReducer from './../pages/identitii/identitiiReducers';

const loggerMiddleware = createLogger();

export type action_type = {
    payload: any,
    type: any,
};

const initialState = {
    toastr: {
        toastrs: [],
    },
};

// concatenate all the reducers
function allReducers(
    state: typeof initialState = initialState,
    action: action_type,
) {
    return {
        URL: URLReducer(state.URL, action),
        toastr: toastrReducer(state.toastr, action),
    };
}


// create store
let store;
if (process.env.NODE_ENV === 'production') {
    store = createStore(
        allReducers,
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
        ),
    );
} else {
    store = createStore(
        allReducers,
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware, // neat middleware that logs actions
        ),
    );
}

export default store;
