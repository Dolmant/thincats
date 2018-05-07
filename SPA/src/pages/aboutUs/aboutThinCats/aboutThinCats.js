// @flow
import {connect} from 'react-redux';
import React from 'react';
import './aboutThinCats.less';

type Props = {
};

export class AboutThinCats extends React.Component<Props> {
    render() {
        //        <body  class="page-template-default page page-id-1314 page-child parent-pageid-1312"  class="">
        return (
            <div className="aboutThinCats">
                <section className="page-title clearfix">
                    <h1>About ThinCats</h1>
                </section>
                <section className="regular-page-content clearfix">
                    <p>ThinCats Australia provides an online market for secured business loans to Australian companies. It is regulated by the Australian Securities and Investments Commission (ASIC) and is the holder of an Australian financial services licence (AFSL 488196).</p>
                    <p>ThinCats Australia links wholesale investors (which includes qualifying sophisticated investors, professional investors, high-net-worth investors and trustees of self-managed superannuation funds) with established SME corporate borrowers to provide a serious alternative to bank lending.</p>
                    <p>ThinCats Australia benefits from a strong relationship with the successful <a href="https://www.thincats.com/">ThinCats UK</a>&nbsp;business which was founded in 2010.</p>
                    <p>We offer a fixed income asset class which is relatively untapped by investors in Australia and which provides a competitive rate of interest subject to potential losses. Lenders make their own decision in choosing loans and the proportion of the loan they wish to invest in.</p>
                    <p>Intended to meet the needs of any qualifying investor managing an investment portfolio (including individuals, super fund managers and companies with surplus cash deposits), ThinCats Australia provides direct access to an Australian market sector traditionally occupied by banks.</p>
                    <p>Borrowers can access loans of up to $2m over periods ranging from 2 to 5 years or more at competitive rates in order to develop their business.</p>
                    <div></div>
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
)(AboutThinCats);
