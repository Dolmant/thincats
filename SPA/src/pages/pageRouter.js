// @flow
import {observer, inject} from "mobx-react"
import React from "react"
import Home from "pages/home/home"
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
        case this.props.store.URL.startsWith("/homenew"):
        case this.props.store.URL.startsWith("/new"):
            return [
                <HomeNew />,
                <Footer />,
            ]
        case this.props.store.URL.startsWith("/home"):
        case this.props.store.URL === "/":
            return (
                <section className="page-wrap">
                    <Header />
                    <Home />
                    <Footer />
                </section>
            )
        case this.props.store.URL.startsWith("/resources"):
            return [
                <Resources />,
                <Footer />,
            ]
        case this.props.store.URL.startsWith("/about"):
            return (
                <section className="page-wrap">
                    <Header />
                    <AboutThinCats />
                    <Footer />
                </section>
            )
        case this.props.store.URL.startsWith("/contactus"):
            return (
                <section className="page-wrap">
                    <Header />
                    <ContactUs />
                    <Footer />
                </section>
            )
        case this.props.store.URL.startsWith("/ourteam"):
            return (
                <section className="page-wrap">
                    <Header />
                    <OurTeam />
                    <Footer />
                </section>
            )
        }
    }
    render() {
        return (
            this.route()
        )
    }
}
