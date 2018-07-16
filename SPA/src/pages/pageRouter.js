// @flow
import {observer, inject} from "mobx-react"
import CSSTransition from "react-transition-group/CSSTransition"
import TransitionGroup from "react-transition-group/TransitionGroup"
import React from "react"
import Home from "pages/home/home"
import Resources from "pages/resources/resourcesNew"
import Footer from "components/generic/footer/footer"
import LinearProgress from "@material-ui/core/LinearProgress";
import type {StoreType} from "types"
import {InjectedComponent} from "store"

type Props = {
};
type InjectedProps = {
    store: StoreType,
};

@inject("store")
@observer
export default class PageRouter extends InjectedComponent<Props, InjectedProps> {
    componentDidMount() {
        const jssStyles = document.getElementById("jss-server-side")
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    route() {
        const {progressLoading} = this.props.store
        const Header = progressLoading < 100 ? () => (
            <LinearProgress className="progressBar" variant="determinate" value={progressLoading} />
        ) : () => null
        // Route based on URL
        switch (true) {
        default:
        case this.props.store.isHome:
            return (
                <CSSTransition
                    key={0}
                    timeout={500}
                    classNames="pageFlipper"
                    unmountOnExit
                >
                    <div>
                        <div className="clipper" />
                        <Header />
                        <Home />
                        <Footer />
                    </div>
                </CSSTransition>
            )
        case this.props.store.isResources:
            return (
                <CSSTransition
                    key={1}
                    timeout={500}
                    classNames="pageFlipper"
                    unmountOnExit
                >
                    <div>
                        <div className="clipper" />
                        <Header />
                        <Resources />
                        <Footer />
                    </div>
                </CSSTransition>
            )
        }
    }

    render() {
        return (
            <TransitionGroup>
                {this.route()}
            </TransitionGroup>
        )
    }
}
