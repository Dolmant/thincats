// @flow
// import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import 'react-redux-toastr/src/styles/index.scss';
// Imports the global 'docReady'
import './util/docReady';
import Home from './pages/home/home';
import store from './store/store';
import './main.less';

declare var docReady;

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: blue,
        error: red,
    },
});

docReady(() => {
    const appTarget = document.getElementById('mount');
    if (appTarget) {
        ReactDOM.render(
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <Home />
                        <ReduxToastr
                            timeOut={4000}
                            newestOnTop={false}
                            preventDuplicates
                            position="top-left"
                            transitionIn="fadeIn"
                            transitionOut="fadeOut"
                            progressBar
                        />
                    </div>
                </MuiThemeProvider>
            </Provider>,
            appTarget);
    }
});
