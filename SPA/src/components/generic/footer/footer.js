// @flow
import {connect} from 'react-redux';
import React from 'react';
import './footer.less';

type Props = {
};

export class Footer extends React.Component<Props> {
    render() {
        //        <body  class="page-template-default page page-id-1314 page-child parent-pageid-1312"  class="">
        return (
            <div className="header">
                <section className="footer-links clearfix">
                    <div className="footer-block col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-2">
                            <h3>Lending</h3>
                            <a href="https://www.thincats.com.au/lending/about-lending/">About Lending</a>
                            <a href="https://www.thincats.com.au/statistics/">Key Statistics</a>
                            <a href="https://www.thincats.com.au/lending/risks/">What are the risks?</a>
                            <a href="https://www.thincats.com.au/lending/lending-faq/">Lending FAQ</a>
                            <a href="https://www.thincats.com.au/wp-content/uploads/2018/04/TCA-Member-Application-Form-April-2018.docx">Membership Application Form</a>
                            <a href="/wp-content/uploads/2014/10/TCA-Membership-Agreement-May16.pdf">Membership Agreement</a>
                            <a href="https://www.thincats.com.au/register/">Register</a>
                        </div>
                        <div className="col-lg-2">
                            <h3>Borrowing</h3>
                            <a href="https://www.thincats.com.au/borrowing/about-borrowing/">About Borrowing</a>
                            <a href="https://www.thincats.com.au/statistics/">Key Statistics</a>
                            <a href="https://www.thincats.com.au/borrowing/apply-loan/">Apply for a loan</a>
                        </div>
                        <div className="col-lg-2">
                            <h3>Sponsors</h3>
                            <a href="https://www.thincats.com.au/sponsors-introducers/about-sponsors-introducers/">About Sponsors and Introducers</a>
                        </div>
                        <div className="col-lg-2">
                            <h3>About us</h3>
                            <a href="https://www.thincats.com.au/about/thincats-australia/">About ThinCats</a>
                            <a href="https://www.thincats.com.au/about/our-team/">Our Team</a>
                            <a href="https://www.thincats.com.au/about/contact-us/">Contact us</a>
                            <a target="_blank" href="/wp-content/uploads/2014/10/TCA-Privacy-Policy-v1.1.pdf">Privacy Policy</a>
                        </div>
                        <div className="col-lg-2" style="padding-top: 45px;">
                            <a href="https://www.thincats.com.au/how-thincats-works/">How it works</a>
                            <a href="https://www.thincats.com.au/resources/">Resources</a>
                            <a href="https://www.thincats.com.au/news/">news</a>
                        </div>
                        <div className="col-lg-2">
                            <ul className="socialmedia">
                                <li><a id="linkedin" href="https://www.linkedin.com/company/thincats-australia"></a></li>
                                <li><a id="twitter" href="https://twitter.com/thincatsAUS"></a></li>
                                <li><a id="facebook" href="https://www.facebook.com/thincatsAUS"></a></li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-lg-12 col-md-12  ">
                            <b>Address: Level 2, 222 Pitt Street, Sydney, NSW 2000. Telephone: 1300 325 342.</b><p>Copyright © ThinCats Australia Group Holdings Pty Ltd  2014. All rights reserved.</p>     <p>ThinCats Australia Pty Ltd (ABN 87 169 752 747) and ThinCats Australia Nominees Pty Ltd (ABN 95 601 494 026) are wholly owned subsidiaries of ThinCats Australia Group Holdings Pty Ltd (ABN 50 169 700 298).</p>
                            <p>ThinCats Australia Pty Ltd holds an Australian financial services licence (AFSL No. 488196) and ThinCats Australia Nominees Pty Ltd (AR No. 469495) is its Authorised Representative.</p>
                            <p>ThinCats Australia Group Holdings Pty Ltd works with, and is partly owned by Business Loan Network Limited, the UK entity which operates<a title="ThinCats UK." href="http://www.thincats.com" target="_blank">ThinCats UK.</a></p>
                            <p>A reference to “us”, “we” or “ThinCats Australia” on this website is a reference to ThinCats Australia Pty Ltd, its associates, successors and assignees from time to time.</p>
                            <p>ThinCats and the cat logo are registered Trade Marks of ThinCats Australia Group Holdings Pty Ltd.</p>
                            <div id="p2p_logo_container" className="col-lg-12 col-md-12">
                                <hr />
                                <div className="bottm-text"> </div>
                            </div>
                        </div>
                    </div>
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
)(Footer);
