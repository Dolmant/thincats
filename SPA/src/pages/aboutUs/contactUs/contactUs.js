// @flow
import {connect} from 'react-redux';
import React from 'react';
import './contactUs.less';

type Props = {
};

export class ContactUs extends React.Component<Props> {
    render() {
        return (
            <div className="contactUs">
                <section className="page-title clearfix">
                    <h1>Contact us</h1>
                </section>
                <section className="regular-page-content clearfix">
                    <h4>Seeking a Loan?</h4>
                    <p>If you are interested in applying for a loan, please contact us by emailing&nbsp;<a href="mailto:loans@thincats.com.au">loans@thincats.com.au</a>&nbsp;with the name, address and ABN of your company, a brief description of its activities, the amount you wish to borrow, and the reason for borrowing.</p>
                    <h4>Interested in Lending?</h4>
                    <p>If you are interested in joining as a Lender and would like some more information please email <a href="mailto:info@thincats.com.au">info@thincats.com.au</a>.</p>
                    <h4>Looking to become a Sponsor or Introducer?</h4>
                    <p>If you are interested in becoming an Introducer or Sponsor please click <a title="About Sponsors and Introducers" href="https://www.thincats.com.au/sponsors-introducers/about-sponsors-introducers/" target="_blank">About Sponsors And Introducers</a> for more information.</p>
                    <h4>General Questions</h4>
                    <p>If you have a general question please send an email to&nbsp;<a href="mailto:info@thincats.com.au">info@thincats.com.au</a>.</p>
                    <p>
                    To speak to a team member, please call <strong>1300 325 342</strong></p>
                    <p><strong>ThinCats Australia, Level 2, 222 Pitt Street, Sydney 2000</strong></p>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ContactUs);
