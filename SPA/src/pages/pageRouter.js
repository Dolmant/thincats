// @flow
import {observer, inject} from "mobx-react"
import React from "react"
import Home from "pages/home/home"
import HomeNew from "pages/home/homeNew"
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
        case "/homenew":
        case "/new":
            return [
                <HomeNew />,
            ]
        case "/home":
        case "/":
            return [
                <Header />,
                <Home />,
            ]
        case "/about":
        case "/about/":
            return [
                <Header />,
                <AboutThinCats />,
            ]
        case "/contactus":
        case "/contactus/":
            return [
                <Header />,
                <ContactUs />,
            ]
        case "/ourteam":
        case "/ourteam/":
            return [
                <Header />,
                <OurTeam />,
            ]
        }
    }
    render() {
        return (
            <section className="page-wrap">
                {this.route()}
                <Footer />
            </section>
        )
    }
}
