// @flow
import {connect} from 'react-redux';
import React from 'react';
import './ourTeam.less';

type Props = {
};

export class OurTeam extends React.Component<Props> {
    render() {
        return (
            <div className="ourTeam">
                <section className="page-title clearfix">
                    <h1>Our Team</h1>
                </section>
                <section className="regular-page-content clearfix">
                    <p>The ThinCats Australia team comprise professionals with significant local and international experience in a wide range of disciplines including:</p>
                    <table style={{width: '100%;'}}>
                        <tbody>
                            <tr>
                                <td>Banking</td>
                                <td>Financial services</td>
                                <td>Credit markets</td>
                            </tr>
                            <tr>
                                <td>Platform management</td>
                                <td>Custodial services</td>
                                <td>Corporate governance</td>
                            </tr>
                            <tr>
                                <td>Funds management</td>
                                <td>Compliance</td>
                                <td>Legal affairs</td>
                            </tr>
                            <tr>
                                <td>Marketing</td>
                                <td>Operational management</td>
                                <td>Technology management</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><span style={{textDecoration: 'underline;'}}><span style={{color: '#000000;'}}><strong>MANAGEMENT TEAM</strong></span></span></p>
                    <p><strong>Sunil Aranha</strong> (Chief Executive Officer and Director), with over 25 years of international and local SME sector banking experience in general management roles within Citibank, Efic and Commonwealth Bank. Also established a successful technology start-up in the entertainment technology sector in early 2000.</p>
                    <p><strong>Harsha Nair</strong> (Chief&nbsp;Financial &amp;&nbsp;Operating Officer), with over 25 years of financial control, regulatory compliance and product development experience with banks and brokers including Commonwealth Bank, JPMorgan Chase and Morgan Stanley.</p>
                    <p><strong>Frank Willenberg</strong> (Chief Risk Officer and Director),&nbsp;with over 35 years credit and risk management experience in SME, MME, Business Lending, Commercial Real Estate and Consumer Lending in Australia, and overseas markets in particular USA and the Asia Pacific Region. Most recently he retired as a Senior Vice President for Commercial Banking, Credit and Risk Management at Citibank in Australia.</p>
                    <p><strong>Paul Kyriacou</strong> (General Manager – Business Development &amp; Risk), with over 20 years of banking and financial services experience in senior roles with major domestic and international financial institutions including DBS Bank, CBA, Rabo Bank, Westpac and EFIC.</p>
                    <p><span style={{textDecoration: 'underline;'}}><strong>CONSULTANT</strong></span></p>
                    <div title="Page 15">
                        <div>
                            <div>
                                <div>
                                    <p><strong>David Williams</strong>&nbsp;(Marketing), has over 25 years management and strategic marketing experience gained through positions with leading advertising agencies and as Marketing Director of blue chip Australian companies. David has worked on strategy and creative across a range of businesses including Westfield, Hoyts, NRMA, Event Cinemas and Citibank.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p><span style={{textDecoration: 'underline;'}}><strong>ADVISORS</strong></span></p>
                    <p><strong>Alan Kohler</strong> (Advisor &amp; Mentor),&nbsp;a financial journalist for over 40 years, has been Editor of both the Australian Financial Review and The Age. He also worked for the Australian Broadcasting Corporation and John Fairfax up to 2007. In 2005 he launched Eureka Report, a newsletter for self-directed investors, and in 2007 followed up with Business Spectator, an online business news and commentary publication. In 2016 he founded a business and investment publication The Constant Investor and is currently also business editor at large of The Australian, finance presenter on ABC news and adjunct professor in the business faculty of Victoria University.</p>
                    <p><strong>Nick Basile</strong> (Advisor – Strategy), has over 30 years of financial services experience primarily in investment management covering a broad spectrum of asset classes and investment styles. He has previously held various senior executive positions including Chief Investment Officer roles at several top 20 Australian companies and most recently was the Chief Investment Officer of the Suncorp Group where he was responsible for providing advice and implementing investment solutions relating to asset allocation, manager selection and mandates for Suncorp’s circa $20 billion in Funds under Management.</p>
                    <p><strong>Glenwyn Baptist</strong> (Advisor – Strategy), is a 30-year veteran of the investment industry in the United States with a vast array of investment experience ranging from investment management and corporate finance to marketing and strategic planning. He is currently CEO of Prudential International Investments, responsible for managing the local asset management affiliates of Prudential Financial (US) in China, India, Taiwan, Brazil and Italy. Prior to this, he has held various positions including CIO of this unit, Head of mutual funds and managed accounts, COO for asset management and MD in charge of fixed income research.</p>
                    <p><strong>Glenn Homan</strong> (Advisor – Credit), has had senior executive experience with the Australian Prudential Regulatory Authority (APRA) and leading Australian financial institutions. He is recognised internationally as an industry expert on credit risk frameworks, processes and practices, and a technical author of prudential standards and guidance on risk requirements. He has been a regular keynote speaker at various local and overseas conferences representing APRA’s view on credit risk management.</p>
                    <p><strong>Andrew MacDonald</strong> (Advisor – Legal), is the principal of the law firm, Audax Legal Pty Limited. Audax Legal focuses on financial services businesses. Andrew specialises in financial products and services and corporate law. Prior to starting Audax Legal in 2002, he was a partner in PwC Legal and Director at Deutsche Bank.</p>
                    <p><strong>Tim Allerton</strong> (Advisor – Public Relations), Managing Director of City Public Relations, is ThinCats Australia’s public relations strategist. He has 35 years’ experience in public&nbsp;relations and the media – covering the fields of print, television and video communications. City Public Relations provides ThinCats Australia with communications solutions for the ongoing promotion of the company in Australia.</p>
                    <p><strong>Aditya Ghose</strong> (Advisor – IT), a computer scientist with over 25 years experience in delivering R&amp;D outcomes to industry. He is Professor of Computer Science at the University of Wollongong and Director of the Decision Systems Lab.</p>
                    <p>&nbsp;</p>
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
)(OurTeam);
