// @flow
import {connect} from 'react-redux';
import React from 'react';
import './howItWorks.less';

type Props = {
};

export class HowItWorks extends React.Component<Props> {
    render() {
        return (
            <div className="howItWorks">
                <section className="page-title clearfix">
                    <h1>How it works</h1>
                </section>
                <section className="regular-page-content clearfix">
                    <h3 style={{textAlign: 'center'}}><strong>View our 2-minute explainer video <a title="here" href="https://thincatsaus.wistia.com/medias/2nc5twt1mz" rel="noopener noreferrer" target="_blank">here</a>.</strong></h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 h-it-work">
                                <p><img className="alignnone size-full wp-image-1986" title="how-it-works-1" alt="" src="https://www.thincats.com.au/wp-content/uploads/2016/05/how-it-work-1.png" width="161" height="162" /></p>
                                <h6>1.LOAN APPLICATION</h6>
                                <p>SMEs apply for loans up to $2m either directly via the TCA platform or through Sponsors/Introducers.</p>
                            </div>
                            <div className="col-sm-4 h-it-work">
                                <p><img className="alignnone size-full wp-image-1986" title="how-it-works-2" alt="" src="https://www.thincats.com.au/wp-content/uploads/2016/05/how-it-wokr-2.png" width="161" height="162" /></p>
                                <h6>2. AUCTION LISTING</h6>
                                <p>The TCA Credit Team reviews loan applications and lists eligible loan opportunities for auction on the platform, with credit submissions and supporting documentation.</p>
                            </div>
                            <div className="col-sm-4 h-it-work">
                                <p><img className="alignnone size-full wp-image-1986" title="how-it-works-3" alt="" src="https://www.thincats.com.au/wp-content/uploads/2016/05/how-it-wokr-3.png" width="161" height="162" /></p>
                                <h6>3. FUND TRANSFERS</h6>
                                <p>Wholesale investors assess loan opportunities, transfer funds to TCAN trust account and bid for parts of each loan opportunity (min. bid $1k) on the platform.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 h-it-work">
                                <p><img className="alignnone size-full wp-image-1986" title="how-it-works-4" alt="" src="https://www.thincats.com.au/wp-content/uploads/2016/05/how-it-wokr-4.png" width="161" height="162" /></p>
                                <h6>4. AUCTION COMPLETION</h6>
                                <p>After auction completion, borrower executes security documentation in favour of TCAN as Trustee for lenders, and funds are transferred to the borrower.</p>
                            </div>
                            <div className="col-sm-4 h-it-work">
                                <p><img className="alignnone size-full wp-image-1986" title="how-it-works-5" alt="" src="https://www.thincats.com.au/wp-content/uploads/2016/05/how-it-wokr-5.png" width="161" height="162" /></p>
                                <h6>5. MONTHLY PAYMENTS</h6>
                                <p>Fixed monthly repayments of principal and interest from borrowers are credited to the lenders accounts on the platform.</p>
                            </div>
                            <div className="col-sm-4 h-it-work">
                                <p><img className="alignnone size-full wp-image-1986" title="how-it-works-6" alt="" src="https://www.thincats.com.au/wp-content/uploads/2016/05/how-it-wokr-6.png" width="161" height="162" /></p>
                                <h6>6. LOAN PERIOD</h6>
                                <p>The loan is repaid over the fixed term.</p>
                            </div>
                        </div>
                    </div>
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
)(HowItWorks);
