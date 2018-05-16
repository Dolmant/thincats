// @flow
import React from "react"
import ReactDOM from "react-dom"
import {MuiThemeProvider, createMuiTheme} from "material-ui/styles"
import blue from "material-ui/colors/blue"
import red from "material-ui/colors/red"
import {Provider} from "mobx-react"
// Imports the global 'docReady'
import "./util/docReady"
import PageRouter from "./pages/pageRouter"
import Store from "store"
import "./main.less"

declare var docReady;

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: blue,
        error: red,
    },
})

docReady(() => {
    const appTarget = document.getElementById("mount")
    if (appTarget) {
        ReactDOM.render(
            <Provider store={Store}>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <PageRouter />
                        {/* <ReduxToastr
                            timeOut={4000}
                            newestOnTop={false}
                            preventDuplicates
                            position="top-left"
                            transitionIn="fadeIn"
                            transitionOut="fadeOut"
                            progressBar
                        /> */}
                    </div>
                </MuiThemeProvider>
            </Provider>,
            appTarget)
    }
})
