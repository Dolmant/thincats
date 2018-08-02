// @flow
import React from "react"
import {hydrate} from "react-dom"
import {render as RenderSnapShot} from "react-snapshot"
import {MuiThemeProvider, createMuiTheme, createGenerateClassName} from "@material-ui/core/styles"
import {Provider} from "mobx-react"
import Store from "store"
import {SheetsRegistry} from "react-jss/lib/jss"
import JssProvider from "react-jss/lib/JssProvider"
// Imports the global 'docReady'
import "./util/docReady"
import PageRouter from "./pages/pageRouter"
import "./main.less"

declare var docReady;

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ffcc00",
            light: "#ffff50",
            dark: "#c79c00",
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contast with palette.primary.main
        },
        secondary: {
            main: "#ffffff",
            // dark: will be calculated from palette.secondary.main,
            // contrastText: "#ffcc00",
        },
        // error: will use the default color
    },
})

const sheetsRegistry = new SheetsRegistry()
const generateClassName = createGenerateClassName()

docReady(() => {
    const appTarget = document.getElementById("mount")
    if (appTarget) {
        const appElement = (
            <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                <Provider store={Store}>
                    <MuiThemeProvider theme={theme}>
                        <PageRouter />
                        <a className="prerenderer" href="/resources.html">
                            {"Invisible link for prerenderer"}
                        </a>
                    </MuiThemeProvider>
                </Provider>
            </JssProvider>
        )
        if (appTarget.hasChildNodes()) {
            hydrate(
                appElement,
                appTarget,
            )
        } else {
            RenderSnapShot(
                appElement,
                appTarget,
            )
        }
        window.popstate = () => {
            Store.replaceURL(window.location.pathname)
        }
        window.addEventListener("popstate", () => {
            Store.replaceURL(window.location.pathname)
        })
    }
})
