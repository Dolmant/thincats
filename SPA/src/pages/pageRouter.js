// @flow
import {connect} from 'react-redux';
import React from 'react';
import Home from 'pages/home/home';
import AboutThinCats from 'pages/aboutUs/aboutThinCats/aboutThinCats';
import ContactUs from 'pages/aboutUs/contactUs/contactUs';
import OurTeam from 'pages/aboutUs/ourTeam/ourTeam';
import Header from 'components/generic/header/header';
import Footer from 'components/generic/footer/footer';

type Props = {
    URL: string,
};

class PageRouter extends React.Component<Props> {
    route() {
        // Route based on URL
        switch (this.props.URL) {
        default:
        case '/home':
        case '/':
            return [
                <Home />,
            ];
        case '/aboutthincats':
            return [
                <AboutThinCats />,
            ];
        case '/contactus':
            return [
                <ContactUs />,
            ];
        case '/ourteam':
            return (
                <OurTeam />
            );
        }
    }
    render() {
        return (
            <section className="page-wrap">
                <Header />
                {this.route()}
                <Footer />
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    URL: state.URL,
});

const mapDispatchToProps = () => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageRouter);
