// @flow
import {configure} from 'mobx';
import URLReducer from './URLReducers';

configure({enforceActions: true});

class Store {
    @observable githubProjects = []
    @observable state = "pending"

    fetchProjects = flow(function * () { // <- note the star, this a generator function!
        this.githubProjects = []
        this.state = "pending"
        try {
            const projects = yield fetchGithubProjectsSomehow() // yield instead of await
            const filteredProjects = somePreprocessing(projects)
            // the asynchronous blocks will automatically be wrapped actions and can modify state
            this.state = "done"
            this.githubProjects = filteredProjects
        } catch (error) {
            this.state = "error"
        }
    })
}

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
