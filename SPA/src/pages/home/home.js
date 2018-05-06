// @flow
import {connect} from 'react-redux';
import React from 'react';
import './home.less';

type Props = {
    getUIData: () => void,
    postUIData: () => void,
    overrideUIData: (any) => void,
    attributes: any,
    formTypes: any,
    loading: boolean,
};

export class Home extends React.Component<Props> {
    componentDidMount() {
        this.props.getUIData();
        window.overrideData = this.props.overrideUIData;
    }
    render() {
        return (
            <div classNam="home">
                <div id="content">
                    <div className="container page-container">
                        <div className="row home-content">
                            <h1>Connecting growing businesses with smart investors</h1>
                            <div className="col-sm-8 left-colHome">
                                <div className="col-lg-12 col-sm-12">
                                    <div className="about-info">
                                        <p>
                                            <img className="alignnone wp-image-5034476 size-full" title="9 fat reasons to lend through ThinCats" src="https://www.thincats.com.au/wp-content/themes/thincats/images/roason-1.png" alt="9 fat reasons to lend through ThinCats" width="706" height="313" />
                                        </p>
                                        <h2>to borrow or lend through <img className="alignnone wp-image-5034579 size-full" title="thincats" src="https://www.thincats.com.au/wp-content/themes/thincats/images/thincats.png" alt="" width="203" height="43" style="height: 30px; padding-bottom: 5px;" /> <img className="alignright size-full wp-image-5034479 right-img" title="right-img" src="https://www.thincats.com.au/wp-content/themes/thincats/images/right-img.png" alt="" width="75" height="74" /></h2>
                                    </div>
                                </div>
                                <hr className="border-bot" />
                                <div className="col-lg-12 col-sm-12 front-page-widgets">
                                    <div className="slidingDiv overlaydiv  common_box_text" id="box_text1" style="display: none;">
                                        <span className="arrow-top"></span>
                                        <div className="close-btn show_hide" id="hid" style="display: block;">close</div>
                                        <p>An attractive yield to lenders, well above most equity investment opportunities and a competitive rate for borrowers when compared with the exorbitant interest rates on short term loans provided by most non-bank lenders.&nbsp;The weighted average interest rate on loans since inception (Feb 2015) is around 14% p.a.*</p>
                                        <p>Borrowers can apply for loans by filling out our&nbsp;<strong><a href="https://www.thincats.com.au/borrowing/apply-loan/" target="_blank" rel="noopener noreferrer">application form</a>.</strong></p>
                                        <p>Lending is open to wholesale investors and eligible SMSFs.&nbsp;<strong><a href="https://www.thincats.com.au/register/" target="_blank" rel="noopener noreferrer">Register</a></strong><em>&nbsp;</em>and review the current loans on the platform. There is no obligation to bid and membership is free.</p>
                                        <p>Once approved members can bid fractionally on loans. The minimum bid is $1,000.</p>
                                        <p><em><strong>For key statistics click <a title="here" href="https://www.thincats.com.au/statistics/" target="_blank" rel="noopener noreferrer">here</a>.</strong></em></p>
                                        <p><em><strong>*: Lender returns are <strong>gross returns before fees, taxes and potential losses on loans</strong></strong></em></p>
                                    </div>
                                    <div className="reason_column row">
                                        <div className="reason-img col-lg-4 col-sm-4 common_box" id="reason1">
                                            <div id="slidingDiv" className="show_hide" style="display: block;">
                                                <p>
                                                    <img className="alignnone wp-image-5034614 size-full" title="reason-1" src="https://www.thincats.com.au/wp-content/themes/thincats/images/reason-1.png" alt="" width="270" height="267" />
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reason-content col-lg-8 col-sm-8">
                                            <div className="reason-inner">
                                                <p><strong id="slidingDiv" className="show_hide1 show_hide" style="display: inline;"></strong></p><p><strong id="slidingDiv" className="show_hide1 show_hide" style="display: inline;"><strong><em>Competitive interest rates averaging 14.6</em><em>% p.a.</em><em>*…</em></strong></strong></p><strong id="slidingDiv" className="show_hide1 show_hide" style="display: inline;">
                                                </strong><p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12 front-page-widgets front-page-widgets1">
                                    <div className="slidingDiv2 overlaydiv  common_box_text" id="box_text2" style="display: none;">
                                        <span className="arrow-top"></span>
                                        <div className="close-btn show_hide" style="display: block;">close</div>
                                        <p>Although peer-to-peer lending is a new concept, we are old fashioned relationship bankers using new technology to deliver true cash flow lending secured against a business not against homes and other real estate. We get to know the businesses we lend to and tell lenders the whole story with primary focus on the ability of the borrower to repay the loan from its current and future business cash flows.</p>
                                        <p>At ThinCats, loans are primarily secured by a first charge over the assets of the borrower company and recorded on the Personal Property Securities Register. In addition a personal guarantee is obtained from each of the directors and in some cases a second mortgage may be required. However for our lenders security is truly the second way out.</p>
                                        <p>ThinCats monitors all loans and informs lenders on a periodic basis based on updated information provided by borrowers.</p>
                                        <p>If a borrower defaults, based on the circumstances, third party collection agents may be appointed to commence recovery action on behalf of the lenders.</p>
                                    </div>
                                    <div className="reason_column row">
                                        <div className="reason-img col-lg-4 col-sm-4 common_box" id="reason2">
                                            <div id="slidingDiv2" className="show_hide" style="display: block;">
                                                <p>
                                                    <img className="alignnone wp-image-5034616 size-full" title="reason-2" src="https://www.thincats.com.au/wp-content/themes/thincats/images/reason-2.png" alt="" width="305" height="281" />
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reason-content col-lg-8 col-sm-8">
                                            <div className="reason-inner">
                                                <p><strong id="slidingDiv2" className="show_hide2 show_hide" style="display: inline;"></strong></p><p><strong id="slidingDiv2" className="show_hide2 show_hide" style="display: inline;"><strong><em>Secured loans…<br />
                                                </em></strong></strong></p><strong id="slidingDiv2" className="show_hide2 show_hide" style="display: inline;">
                                                </strong><p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12 front-page-widgets front-page-widgets1">
                                    <div className="slidingDiv3 overlaydiv  common_box_text" id="box_text3" style="display: none;">
                                        <span className="arrow-top"></span>
                                        <div className="close-btn show_hide" style="display: block;">close</div>
                                        <p>Our loans are generally for terms of 2 to 5 years and all our loans are on a principal and interest basis. This enables borrowers to have certainty of the finance they need for a medium to long term and comfort for the lenders who are repaid principal and interest each month.</p>
                                        <p>Borrowers have the flexibility to repay loans in full at any time before maturity without any additional fees or charges.</p>
                                    </div>
                                    <div className="reason_column row">
                                        <div className="reason-img col-lg-4 col-sm-4 common_box" id="reason3">
                                            <div id="slidingDiv3" className="show_hide" style="display: block;">
                                                <p>
                                                    <img className="alignnone wp-image-5034618 size-full" title="reason-3" src="https://www.thincats.com.au/wp-content/themes/thincats/images/reason-3.png" alt="" width="276" height="282" />
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reason-content col-lg-8 col-sm-8">
                                            <div className="reason-inner">
                                                <p><strong id="slidingDiv3" className="show_hide3 show_hide" style="display: inline;"></strong></p><p><strong id="slidingDiv3" className="show_hide3 show_hide" style="display: inline;"><strong><em>Flexible loan terms 24 to 60 months…</em></strong></strong></p><strong id="slidingDiv3" className="show_hide3 show_hide" style="display: inline;">
                                                </strong><p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12 front-page-widgets front-page-widgets4">
                                    <div className="slidingDiv4 overlaydiv  common_box_text" id="box_text4" style="display: none;">
                                        <span className="arrow-top"></span>
                                        <div className="close-btn show_hide" style="display: block;">close</div>
                                        <p>ThinCats facilitates the provision of growth finance for businesses including working capital, equipment finance, infrastructure finance and business acquisition finance.</p>
                                        <p>We cater to SME corporates including professional services, general services, manufacturers, wholesalers and retailers excluding finance companies.</p>
                                    </div>
                                    <div className="reason_column row">
                                        <div className="reason-img col-lg-4 col-sm-4 common_box" id="reason4">
                                            <div id="slidingDiv4" className="show_hide" style="display: block;">
                                                <p>
                                                    <img className="alignnone wp-image-5034620 size-full" title="reason-4" src="https://www.thincats.com.au/wp-content/themes/thincats/images/reason-4.png" alt="" width="287" height="262" />
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reason-content col-lg-8 col-sm-8">
                                            <div className="reason-inner">
                                                <p><strong id="slidingDiv4" className="show_hide4 show_hide" style="display: inline;"></strong></p><p><strong id="slidingDiv4" className="show_hide4 show_hide" style="display: inline;"><strong><em>Loans for genuine business growth…</em></strong></strong></p><strong id="slidingDiv4" className="show_hide4 show_hide" style="display: inline;">
                                                </strong><p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-12 front-page-widgets front-page-widgets5">
                                    <div className="slidingDiv5 overlaydiv  common_box_text" id="box_text5" style="display: none;">
                                        <span className="arrow-top"></span>
                                        <div className="close-btn show_hide" style="display: block;">close</div>
                                        <p>All our <strong><a href="https://www.thincats.com.au/borrowing/about-borrowing/" target="_blank" rel="noopener">fees and charges</a></strong>&nbsp;to borrowers are clearly detailed on our website.</p>
                                        <p>We charge an upfront fee which is usually deducted from the loan proceeds and a small trail on the reducing balance.</p>
                                        <p>We do not charge borrowers any fees or charges for early repayment.</p>
                                        <p>We do not charge any fees to lenders.</p>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="reason_column row">
                                        <div className="reason-img col-lg-4 col-sm-4 common_box" id="reason5">
                                            <div id="slidingDiv5" className="show_hide" style="display: block;">
                                                <p><img className="alignnone wp-image-5034621 size-full" title="reason-5" src="https://www.thincats.com.au/wp-content/themes/thincats/images/reason-5.png" alt="" width="282" height="262" /></p>
                                            </div>
                                        </div>
                                        <div className="reason-content col-lg-8 col-sm-8">
                                            <div className="reason-inner">
                                                <p><strong id="slidingDiv5" className="show_hide5 show_hide" style="display: inline;"></strong></p><p><strong id="slidingDiv5" className="show_hide5 show_hide" style="display: inline;"><em><b>No early repayment charges and no hidden fees…</b></em></strong></p><strong id="slidingDiv5" className="show_hide5 show_hide" style="display: inline;">
                                                </strong><p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12 front-page-widgets front-page-widgets6">
                                    <div className="slidingDiv6 overlaydiv  common_box_text" id="box_text6" style="display: none;">
                                        <span className="arrow-top"></span>
                                        <div className="close-btn show_hide" style="display: block;">close</div>
                                        <p>The ThinCats team has very strong credentials in lending particularly to small business and we make sure that you are talking to a decision maker who understands your business and will assist you to tell your story to potential lenders, so that a good result can be achieved by both lenders and borrowers. Check out our&nbsp;<strong><a href="https://www.thincats.com.au/about/our-team/" target="_blank" rel="noopener">management team</a></strong>.</p>
                                    </div>
                                    <div className="reason_column row">
                                        <div className="reason-img col-lg-4 col-sm-4 common_box" id="reason6">
                                            <div id="slidingDiv6" className="show_hide" style="display: block;">
                                                <p><img className="alignnone wp-image-5034622 size-full" title="reason-6" src="https://www.thincats.com.au/wp-content/themes/thincats/images/reason-6.png" alt="" width="277" height="267" /></p>
                                            </div>
                                        </div>
                                        <div className="reason-content col-lg-8 col-sm-8">
                                            <div className="reason-inner">
                                                <p><strong id="slidingDiv6" className="show_hide6 show_hide" style="display: inline;"></strong></p><p><strong id="slidingDiv6" className="show_hide6 show_hide" style="display: inline;"><em><b>Talk to a lending expert…</b></em></strong></p><strong id="slidingDiv6" className="show_hide6 show_hide" style="display: inline;">
                                                </strong><p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12 front-page-widgets front-page-widgets7">
                                    <div className="slidingDiv7 overlaydiv  common_box_text" id="box_text7" style="display: none;">
                                        <span className="arrow-top"></span>
                                        <div className="close-btn show_hide" style="display: block;">close</div>
                                        <p>ThinCats vets all borrower loan applications for eligibility and once approved, we help the borrower to present their request to the lenders with all key information, including the business information memorandum, financial spreadsheet, directors’ asset and liability position and credit agency scores, along with the loan overview so lenders can make a direct and informed decision and borrowers are able to accurately present their proposition.</p>
                                        <p>This is very different from other lenders who simply “match” loans and risk profiles with lenders not aware of exactly where their loans are made and borrowers not sure if their information has been accurately represented.</p>
                                        <p>All members are able to log in and view the current loans listed on the platform (Primary Market tab).</p>
                                        <p>We make no recommendations and offer no investment advice.</p>
                                    </div>
                                    <div className="reason_column row">
                                        <div className="reason-img col-lg-4 col-sm-4 common_box" id="reason7">
                                            <div id="slidingDiv7" className="show_hide" style="display: block;">
                                                <p><img className="alignnone wp-image-5034624 size-full" title="reason-7" src="https://www.thincats.com.au/wp-content/themes/thincats/images/reason-7.png" alt="" width="279" height="265" /></p>
                                            </div>
                                        </div>
                                        <div className="reason-content col-lg-8 col-sm-8">
                                            <div className="reason-inner">
                                                <p><strong id="slidingDiv7" className="show_hide7 show_hide" style="display: inline;"></strong></p><p><strong id="slidingDiv7" className="show_hide7 show_hide" style="display: inline;"><em><b>Transparency with detailed information on each loan…</b></em></strong></p><strong id="slidingDiv7" className="show_hide7 show_hide" style="display: inline;">
                                                </strong><p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12 front-page-widgets front-page-widgets8">
                                    <div className="slidingDiv8 overlaydiv  common_box_text" id="box_text8" style="display: none;">
                                        <span className="arrow-top"></span>
                                        <div className="close-btn show_hide" style="display: block;">close</div>
                                        <p>ThinCats offers peer-to-peer loans across a broad range of businesses.</p>
                                        <p>As a ThinCats lender you can research and build your own personal or SMSF portfolio from a range of secured business loans. To review loans on our platform you only have to <strong><a href="https://www.thincats.com.au/register/" target="_blank" rel="noopener">register</a></strong>&nbsp;as a member. There is no obligation to bid.</p>
                                        <p>ThinCats members can select loans by the criteria that suits them: for example, by maturity, interest rate, business type, and location – indeed, using any of the factors covered in our detailed information packs. You can take out an individual loan, or build a diversified portfolio. The choice is yours.</p>
                                        <p><em><strong>For more information on loans to date, click <a title="here" href="https://www.thincats.com.au/statistics/" target="_blank" rel="noopener">here</a>.</strong></em></p>
                                        <p>Diversification is an important way in which investors control risk. The wider the range of loans you hold, across a breadth of business types, the less will be the impact of a particular loss. A broadly-invested ThinCats loan portfolio brings the benefits of diversification on two levels:</p>
                                        <p><b>Diversification within your ThinCats loans</b></p>
                                        <p>Holding a range of different loans means that your loan portfolio will be less vulnerable to specific economic conditions than one where loans are concentrated in one business. So, for example, a coffee distributor will be subject to different market forces than a building material supplier, which in turn behaves very differently than a solar energy systems supplier.</p>
                                        <p><b>Diversification within your overall portfolio</b></p>
                                        <p>P2P loans are a distinct “asset className” and behave differently to other asset classNamees: for example, equities, bonds or property. Peer to peer loans produce a fixed predictable return. Having a meaningful P2P loan allocation in a portfolio should, therefore, lower its overall volatility.</p>
                                        <p>You can view your portfolio along with detailed performance information at any time on your personal dashboard.</p>
                                        <p>Lenders can ask questions or seek clarification from the borrower on any loan, through the Q&amp;A function available for each loan on the platform and you can also see all the other lender bids.</p>
                                        <p>ThinCats effectively enables lenders to access an attractive fixed income asset className previously only available to banks.</p>
                                    </div>
                                    <div className="reason_column row">
                                        <div className="reason-img col-lg-4 col-sm-4 common_box" id="reason8">
                                            <div id="slidingDiv8" className="show_hide" style="display: block;">
                                                <p>
                                                    <img className="alignnone wp-image-5034626 size-full" title="reason-8" src="https://www.thincats.com.au/wp-content/themes/thincats/images/reason-8.png" alt="" width="290" height="259" />
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reason-content col-lg-8 col-sm-8">
                                            <div className="reason-inner">
                                                <p><strong id="slidingDiv8" className="show_hide8 show_hide" style="display: inline;"></strong></p><p><strong id="slidingDiv8" className="show_hide8 show_hide" style="display: inline;"><em><b>Diversify your risk…</b></em></strong></p><strong id="slidingDiv8" className="show_hide8 show_hide" style="display: inline;">
                                                </strong><p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-sm-12 front-page-widgets front-page-widgets9">
                                    <div className="slidingDiv9 overlaydiv common_box_text" id="box_text9" style="display: none;">
                                        <span className="arrow-top"></span>
                                        <div className="close-btn show_hide" style="display: block;">close</div>
                                        <p>The SME sector is an underserviced area largely due to the reluctance of banks to lend to SMEs for a variety of reasons.</p>
                                        <p>One of the key issues SMEs face when borrowing from banks is the requirement of residential property as collateral resulting in loans being made to businesses with the best collateral, rather than those that are the best business prospects.</p>
                                        <p>At ThinCats, the assessment of the borrowers business and ability to pay is paramount and collateral requirements are not based on real estate.</p>
                                        <p>ThinCats facilitates funding for SME corporates and higher rates of return for our lenders. Unlike the fat cats at the big banks, as we charge no fees to our lenders we take very little of the cream. That’s why we’re ThinCats.</p>
                                    </div>
                                    <div className="reason_column row">
                                        <div className="reason-img col-lg-4 col-sm-4 common_box" id="reason9">
                                            <div id="slidingDiv9" className="show_hide" style="display: block;">
                                                <p>
                                                    <img className="alignnone wp-image-5034627 size-full" title="reason-9" src="https://www.thincats.com.au/wp-content/themes/thincats/images/reason-9.png" alt="" width="292" height="249" />
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reason-content col-lg-8 col-sm-8">
                                            <div className="reason-inner">
                                                <p>
                                                    <strong id="slidingDiv9" className="show_hide9 show_hide" style="display: inline;"></strong>
                                                </p>
                                                <p><strong id="slidingDiv9" className="show_hide9 show_hide" style="display: inline;"><em><strong>Support the Australian SME community…</strong></em></strong>
                                                </p>
                                                <strong id="slidingDiv9" className="show_hide9 show_hide" style="display: inline;">
                                                </strong>
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-sidebar col-sm-4"><li className="widget widget_text">
                                <div className="textwidget">
                                    <section className="sidebar-slider-section">
                                        <a href="#" className="left-arrow"></a>
                                        <a href="#" className="right-arrow"></a>
                                        <div className="sidebar-slide-container cycle-slideshow" data-cycle-fx="scrollHorz" data-cycle-prev=".sidebar-slider-section .left-arrow" data-cycle-next=".sidebar-slider-section .right-arrow" data-cycle-slides=" > .indv-slide" data-cycle-timeout="5000" style="position: relative; overflow: hidden;"><div className="indv-slide cycle-slide cycle-sentinel" style="position: static; top: 0px; left: 0px; z-index: 100; opacity: 1; display: block; visibility: hidden;">
                                            <figure style="visibility: hidden;">
                                                <span className="wistia_embed wistia_async_psiamvfuq6 popover=true popoverContent=link wistia_embed_initialized" style="display: inline; visibility: hidden;" id="wistia-psiamvfuq6-1"><div id="wistia_39.thumb_container" className="wistia_click_to_play" style="position: relative; display: inline;">
                                                    <a href="#" style="visibility: hidden;">
                                                        <img src="https://www.thincats.com.au/wp-content/uploads/2016/05/video1g.png" alt="" style="visibility: hidden;" />
                                                        <figcaption style="visibility: hidden;">ThinCats at Wholesale Investor</figcaption>
                                                    </a>
                                                </div>
                                                </span>
                                            </figure>
                                        </div>
                                            <div className="indv-slide cycle-slide cycle-slide-active" style="position: absolute; top: 0px; left: 0px; z-index: 99; opacity: 1; display: block; visibility: visible;">
                                                <figure>
                                                    <span className="wistia_embed wistia_async_psiamvfuq6 popover=true popoverContent=link wistia_embed_initialized" style="display:inline" id="wistia-psiamvfuq6-2"><div id="wistia_49.thumb_container" className="wistia_click_to_play" style="position: relative; display: inline;">
                                                        <a href="#">
                                                            <img src="https://www.thincats.com.au/wp-content/uploads/2016/05/video1g.png" alt="" />
                                                            <figcaption>ThinCats at Wholesale Investor</figcaption>
                                                        </a>
                                                    </div>
                                                    </span>
                                                </figure>
                                            </div>
                                            <div className="indv-slide cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 97; visibility: hidden; opacity: 1; display: block;">
                                                <figure>
                                                    <span className="wistia_embed wistia_async_2nc5twt1mz popover=true popoverContent=link wistia_embed_initialized" style="display:inline" id="wistia-2nc5twt1mz-1"><div id="wistia_59.thumb_container" className="wistia_click_to_play" style="position: relative; display: inline;">
                                                        <a href="#">
                                                            <img src="https://www.thincats.com.au/wp-content/uploads/2016/05/explainer-video-320x172_p.png" alt="" />
                                                            <figcaption>Peer-to-Business Lending explained</figcaption>
                                                        </a>
                                                    </div>
                                                    </span>
                                                </figure>
                                            </div>
                                            <div className="indv-slide cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 96; visibility: hidden; opacity: 1; display: block;">
                                                <figure>
                                                    <span className="wistia_embed wistia_async_w6o5m30ais popover=true popoverContent=link wistia_embed_initialized" style="display:inline" id="wistia-w6o5m30ais-1"><div id="wistia_72.thumb_container" className="wistia_click_to_play" style="position: relative; display: inline;">
                                                        <a href="#">
                                                            <img src="https://www.thincats.com.au/wp-content/uploads/2016/05/AK-play-icon.png" alt="" />
                                                            <figcaption>ThinCats with Alan Kohler</figcaption>
                                                        </a>
                                                    </div>
                                                    </span>
                                                </figure>
                                            </div>
                                            <div className="indv-slide cycle-slide" style="position: absolute; top: 0px; left: 0px; z-index: 98; visibility: hidden; opacity: 1; display: block;">
                                                <figure>
                                                    <span className="wistia_embed wistia_async_7yj84e44zs popover=true popoverContent=link wistia_embed_initialized" style="display:inline" id="wistia-7yj84e44zs-1"><div id="wistia_85.thumb_container" className="wistia_click_to_play" style="position: relative; display: inline;">
                                                        <a href="#">
                                                            <img src="https://www.thincats.com.au/wp-content/uploads/2016/05/Screen-Shot-2016-11-10-at-8.26.12-PM.png" alt="" />
                                                            <figcaption>{'ThinCats on Sky News "Business Success"'}</figcaption>
                                                        </a></div>
                                                    </span>
                                                </figure>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </li>
                                <li className="widget widget_text">
                                    <h2 className="widgettitle">What is ThinCats?</h2>
                                    <div className="textwidget">
                                        <p>ThinCats Australia is an online marketplace for secured business loans to Australian companies. It is regulated by the Australian Securities and Investments Commission (ASIC) and is the holder of an Australian financial services licence.</p>
                                        <p>Our platform links wholesale investors including eligible SMSFs directly to corporate SMEs.</p>
                                        <p>Investors can fund a portion of the total loan requirement of multiple borrowers and borrowers can&nbsp;fund their loan requirements through multiple lenders.</p>
                                        <p>Because we are bypassing banks, both lenders and borrowers get a better deal.</p>
                                        <p><strong><em>Please click on our 2-minute explainer video above.</em></strong></p>
                                    </div>
                                </li>
                                <li className="widget widget_text">
                                    <h2 className="widgettitle">Borrowers</h2>
                                    <div className="textwidget">
                                        <p></p><p>√ &nbsp;Borrow <strong>$50k to $300k</strong></p>
                                        <p>√ &nbsp;Loans based on business fundamentals, not real estate ownership</p>
                                        <p>√&nbsp; No hidden fees, No early repayment fees</p>
                                        <p>√&nbsp; Transparent process, talk to business lending experts</p>
                                        <p>√&nbsp; Loans assessed by real people not computer algorithms</p>
                                        <p></p>
                                        <p><a className="free_memberbtn" href="/borrowing/apply-loan/">Apply Now </a></p>
                                    </div>
                                </li>
                                <li className="widget widget_text">
                                    <h2 className="widgettitle">Lenders</h2>
                                    <div className="textwidget">
                                        <p></p><p>√ &nbsp;Fixed interest rates with monthly payments of principal and interest</p>
                                        <p>√&nbsp; Dashboard to manage your loan portfolio</p>
                                        <p>√ &nbsp;Loans secured by business assets, 2nd mortgages and directors’ guarantees</p>
                                        <p>√&nbsp; Diversify your personal and SMSF investments with fractional lending</p>
                                        <p>√&nbsp; Help Australian small business grow</p>
                                        <p>*: gross returns before fees, taxes and potential losses on loans</p>
                                        <p></p>
                                        <p><a className="free_memberbtn" href="/register/">FREE membership</a></p>
                                    </div>
                                </li>
                                <li className="widget widget_text">
                                    <h2 className="widgettitle">Login</h2>
                                    <div className="textwidget">
                                        <div className="content login">
                                            <div className="lwa lwa-default">
                                                <form className="lwa-form" action="https://www.thincats.com.au/wp-login.php" method="post">
                                                    <div>
                                                        <span className="lwa-status"></span>
                                                        <table>
                                                            <tbody>
                                                                <tr className="lwa-username">
                                                                    <td className="lwa-username-input">
                                                                        <input type="text" name="log" placeholder="Username" />
                                                                    </td>
                                                                </tr>
                                                                <tr className="lwa-password">
                                                                    <td className="lwa-password-input">
                                                                        <input type="password" name="pwd" placeholder="Password" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colSpan="2"></td>
                                                                </tr>
                                                                <tr className="lwa-submit">
                                                                    <td className="lwa-submit-button">
                                                                        <input type="submit" name="wp-submit" id=" " value="Log In" tabIndex="100" className="btn form-group" />
                                                                        <input type="hidden" name="lwa_profile_link" value="" />
                                                                        <input type="hidden" name="login-with-ajax" value="login" />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </form>
                                                <form className="lwa-remember" action="https://www.thincats.com.au/wp-login.php?action=lostpassword" method="post" style="display:none;">
                                                    <div>
                                                        <span className="lwa-status"></span>
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <strong>Forgotten Password</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lwa-remember-email">
                                                                        <input type="text" name="user_login" className="lwa-user-remember" value="Enter username or email" onFocus="if(this.value == 'Enter username or email'){this.value = '';}" onBlur="if(this.value == ''){this.value = 'Enter username or email'}" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="lwa-remember-buttons">
                                                                        <input type="submit" value="Get New Password" className="lwa-button-remember" />
                                                                        <a href="#" className="lwa-links-remember-cancel">Cancel</a>
                                                                        <input type="hidden" name="login-with-ajax" value="remember" />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </form>
                                            </div>
                                            <p style="margin: 11px 0px;"><a href="https://www.thincats.com.au/resetpass-2/?action=lostpassword" title="Lost Password">Forgot/Change password?</a></p>
                                            <p style="margin-bottom: 14px;margin-top: 0px;"><strong>Helpline:</strong> 1300 325 342</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="widget widget_text">
                                    <h2 className="widgettitle">What are the risks of peer-to-peer business lending?</h2>
                                    <div className="textwidget">
                                        <p></p><p>Get all the facts <a href="/lending/risks">here</a>.</p>
                                        <p></p>
                                    </div>
                                </li>
                                <li className="widget widget_text">
                                    <h2 className="widgettitle">News</h2>
                                    <div className="textwidget">
                                        <ul className="latest_posts">
                                            <li>
                                                <span className="date">10/08/2017</span><br />
                                                <h3><a href="/news/">ThinCats Australia Connects over 100 Sophisticated Investors to Secured Business Loans Worth $7m</a></h3>
                                            </li>
                                            <li>
                                                <span className="date">24/04/2017</span><br />
                                                <h3><a href="/news/">Marketplace lending fills a market gap in Small Business finance</a></h3>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="widget widget_text">
                                    <h2 className="widgettitle">What people are saying about us</h2>
                                    <div className="textwidget">
                                        <blockquote>
                                            <p>{"'We simply can't praise ThinCats Australia enough.  We were turned down by major banks when ThinCats offered us loan at identical rates to the major banks. Their meticulous approach &amp; thinking out of the box strategy made it possible to have 'SUCCESSFUL BUSINESS OWNERSHIP'."}<br />
                                            </p>
                                            <strong>RR</strong>
                                        Borrower
                                        </blockquote>
                                        <blockquote>
                                            <p>We recently acquired funding from ThinCats to expand our business interests. Personally I found the process very professional by ThinCats and was delighted by the result. Our successful raising allowed us to enter into more competitive buying contracts and increase our profit margin.</p>
                                            <strong>Ben H</strong>
                                            Borrower
                                        </blockquote>
                                        <blockquote>
                                            <p>I recently established my business and like many new businesses cash flow in the early stages is always a challenge. I found dealing with ThinCats to be simple, professional and effective. They were very understanding of my business finance needs and presented a great solution for my business. I could not be happier with the service from ThinCats. I would recommend ThinCats for any business looking for finance.</p>
                                            <strong>Mark L</strong>
                                            Borrower
                                        </blockquote>
                                        <blockquote>
                                            <p>ThinCats is the engine that takes the banks out of banking and shares the spoils with lenders and borrowers alike. Small companies attract competitive financial support. Lenders share the risk of individual loans to build an attractively yielding fixed income portfolio. It’s win-win.  It’s transparent. It’s simple.</p>
                                            <strong>Slater</strong>
                                            Lender
                                        </blockquote>
                                        <blockquote>
                                            <p>The platform is simple to use, loan information is well displayed and returns are excellent. I have recommended ThinCats to my friends as my particular endorsement of your product.</p>
                                            <strong>Michael</strong>
                                            Lender
                                        </blockquote>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
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
)(Home);
