// @flow
import {connect} from 'react-redux';
import React from 'react';
import './aboutBorrowing.less';

type Props = {
};

export class AboutBorrowing extends React.Component<Props> {
    render() {
        return (
            <div className="aboutBorrowing">
                <section className="page-title clearfix">
                    <h1>About Borrowing</h1>
                </section>
                <section className="regular-page-content clearfix">
                    <h2>What people are saying about us</h2>
                    <p><em>I love the straight forward approach of ThinCats and the fact that we are dealing with the actual decision makers about the application for the loan and facilitation of the loan process through their online platform. (David)</em></p>
                    <p>We recently acquired funding from ThinCats to expand our business interests. Personally I found the process very professional by ThinCats and was delighted by the result. Our successful raising allowed us to enter into more competitive buying contracts and increase our profit margin. (Ben)</p>
                    <p><strong><i>View key statistics including details of our last 10 loans&nbsp;<a title="here" href="https://www.thincats.com.au/statistics/" target="_blank" rel="noopener noreferrer">here</a></i></strong></p>
                    <h2>Overview</h2>
                    <p>ThinCats Australia helps companies raise loans ranging from <strong>$50k to $300k</strong>. Borrowers can apply for loans directly through ThinCats Australia or through our network of&nbsp;<a href="https://www.thincats.com.au/sponsors-introducers/" target="_blank" rel="noopener noreferrer">Sponsors and Introducers</a>.</p>
                    <p>Our Credit team reviews loan applications and supporting documentation, assesses the security on offer and helps the borrower to prepare an information pack to be presented to lenders on the platform. We answer questions from lenders during the loan auction and monitor the loan after it has been completed.</p>
                    <h2>What does the platform offer?</h2>
                    <p>The Platform allows business loans ranging from <strong>$50k to $300k</strong> repayable in fixed monthly instalments over periods ranging from 2 to 5 years at competitive rates. The amount of the fixed monthly repayments depends upon the amount borrowed, the rate of interest and the loan period.</p>
                    <p>All our loans are flexible with full early repayment accepted at any time without any additional costs or interest, and the longer terms allow the borrower to use the funds for a range of working capital and longer term purposes.</p>
                    <h2>Who do we want to work with?</h2>
                    <ul>
                        <li><strong>Small and medium sized companies that require loans for growth</strong> including working capital, equipment finance, infrastructure finance and business acquisition finance.</li>
                        <li><strong>Experienced business operators</strong> who can demonstrate the ability to service the debt.</li>
                    </ul>
                    <p>Please download the key <a href="https://www.thincats.com.au/wp-content/uploads/2018/04/Key-Guidelines-for-Borrowers-apr18.pdf" target="_blank" rel="noopener noreferrer">borrowing criteria </a>to get a broad understanding of eligibility criteria that we evaluate before listing a loan on the ThinCats Australia platform.</p>
                    <h2>What fees do we charge?</h2>
                    <p>Borrowers are charged a one-off fee of around 6% of the loan amount, payable on arrangement of the finance and usually deducted from the loan on disbursement, and a monthly loan administration fee* calculated on the outstanding loan balance, and paid in equal instalments over the term of the loan. All these fees are subject to GST.</p>
                    <p>*Monthly loan administration fees start from 3% p.a. and may vary depending on the loan size, risk and other factors, however, always clarified before the loan is listed on the platform.</p>
                    <p>Borrowers will also be charged legal fees and disbursements incurred by our lawyers in relation to preparation of loan security documentation.</p>
                    <p>Where loans are originated by Sponsors or Introducers, we will based on our own arrangements, share some of our fees with individual Sponsors and Introducers.</p>
                    <h2><a href="https://www.thincats.com.au/borrowing/apply-loan/" target="_blank" rel="noreferrer noopener">Apply for a loan</a></h2>
                    <p style={{textAlign: 'left'}}><em><strong>If you have any questions, please call 1300 325 342</strong></em></p>
                </section>
            </div>
        );
    }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AboutBorrowing);
