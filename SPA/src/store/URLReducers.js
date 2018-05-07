// @flow
import {types} from './URLActions';

type actionType = {
    payload: any,
    type: string,
}

const URLGenerator = () => {
    if (window.location.pathname === '/intro' && window.localStorage.uniqueID) {
        window.history.replaceState({}, 'Home', '/');
        return '/';
    }
    if (window.location.pathname === '/' && !window.localStorage.uniqueID) {
        window.history.replaceState({}, 'Intro', '/intro');
        return '/intro';
    }
    if (window.location.pathname === '/intro' && !window.localStorage.uniqueID) {
        window.history.replaceState({}, 'Intro', '/intro');
        return '/intro';
    }
    if (window.location.pathname === '/' && window.localStorage.uniqueID) {
        window.history.replaceState({}, 'Home', '/');
        return '/';
    }
    console.log('Default route');
    window.history.replaceState({}, 'Home', '/');
    return '/';
};

const initialState = URLGenerator();

export default function URLReducer(state: typeof initialState = initialState, action: actionType) {
    if (action.type === types.REPLACE_URL) {
        window.history.replaceState({}, '', action.payload);
        return action.payload;
    }
    if (action.type === types.PUSH_URL) {
        window.history.pushState({}, '', action.payload);
        return action.payload;
    }
    if (action.type === types.GO_HOME) {
        window.history.pushState({}, 'Home', '/');
        return '/';
    }
    return state;
}
