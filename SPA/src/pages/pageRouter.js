// @flow
import {observer, inject} from "mobx-react"
import CSSTransition from "react-transition-group/CSSTransition"
import TransitionGroup from "react-transition-group/TransitionGroup"
import React from "react"
import HomeNew from "pages/home/homeNew"
import Resources from "pages/resources/resourcesNew"
import AboutThinCats from "pages/aboutUs/aboutThinCats/aboutThinCats"
import ContactUs from "pages/aboutUs/contactUs/contactUs"
import OurTeam from "pages/aboutUs/ourTeam/ourTeam"
import Header from "components/generic/header/header"
import Footer from "components/generic/footer/footer"
import type {StoreType} from "store"

type Props = {
    store: StoreType,
};

@inject("store")
@observer
export default class PageRouter extends React.Component<Props> {
    route() {
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
                        <HomeNew />
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
                        <Resources />
                        <Footer />
                    </div>
                </CSSTransition>
            )
        case this.props.store.isAbout:
            return (
                <section key={2} className="page-wrap">
                    <Header />
                    <AboutThinCats />
                    <Footer />
                </section>
            )
        case this.props.store.isContactUs:
            return (
                <section key={3} className="page-wrap">
                    <Header />
                    <ContactUs />
                    <Footer />
                </section>
            )
        case this.props.store.isOurTeam:
            return (
                <section key={4} className="page-wrap">
                    <Header />
                    <OurTeam />
                    <Footer />
                </section>
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
