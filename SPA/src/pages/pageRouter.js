// @flow
import {observer, inject} from "mobx-react"
import React from "react"
import Home from "pages/home/home"
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
        switch (this.props.store.URL) {
        default:
        case "/home":
        case "/":
            return [
                <Home />,
            ]
        case "/about":
        case "/about/":
            return [
                <AboutThinCats />,
            ]
        case "/contactus":
        case "/contactus/":
            return [
                <ContactUs />,
            ]
        case "/ourteam":
        case "/ourteam/":
            return (
                <OurTeam />
            )
        }
    }
    render() {
        return (
            <section className="page-wrap">
                <Header />
                {this.route()}
                <Footer />
            </section>
        )
    }
}
