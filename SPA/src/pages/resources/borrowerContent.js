// @flow
import React from "react"

// todo fix nav to load entire main page and auto tag the subheaders with an anchor
// todo fix nav to work with variable content levels

export default {
    "How it works": {
        "Loan Application": (
            <div id="loan_application" className="subHeading">
                <h2>Loan Application</h2>
                <p>SMEs apply for loans up to $2m either directly via the TCA platform or through Sponsors/Introducers.</p>
            </div>
        ),
        "Auction Listing": (
            <div id="auction_listing" className="subHeading">
                <h2>Auction Listing</h2>
                <p>The TCA Credit Team reviews loan applications and lists eligible loan opportunities for auction on the platform, with credit submissions and supporting documentation.</p>
            </div>
        ),
        "Fund Transfers": (
            <div id="fund_transfers" className="subHeading">
                <h2>Fund Transfers</h2>
                <p>Wholesale investors assess loan opportunities, transfer funds to TCAN trust account and bid for parts of each loan opportunity (min. bid $1k) on the platform.</p>
            </div>
        ),
        "Auction Completion": (
            <div id="auction_completion" className="subHeading">
                <h2>Auction Completion</h2>
                <p>After auction completion, borrower executes security documentation in favour of TCAN as Trustee for lenders, and funds are transferred to the borrower.</p>
            </div>
        ),
        "Monthly Payments": (
            <div id="monthly_payments" className="subHeading">
                <h2>Monthly Payments</h2>
                <p>Fixed monthly repayments of principal and interest from borrowers are credited to the lenders accounts on the platform.</p>
            </div>
        ),
        "Loan Period": (
            <div id="loan_period" className="subHeading">
                <h2>Loan Period</h2>
                <p>The loan is repaid over the fixed term.</p>
            </div>
        ),
    },
    "About Borrowing": {
        "What people are saying about us": (
            <div id="what_people_are_saying_about_us" className="subHeading">
                <h2>What people are saying about us</h2>
                <p>I love the straight forward approach of ThinCats and the fact that we are dealing with the actual decision makers about the application for the loan and facilitation of the loan process through their online platform. (David)</p>
                <p>We recently acquired funding from ThinCats to expand our business interests. Personally I found the process very professional by ThinCats and was delighted by the result. Our successful raising allowed us to enter into more competitive buying contracts and increase our profit margin. (Ben)</p>
                <p><i>View key statistics including details of our last 10 loans:<a title="here" href="/statistics/" target="_blank" rel="noopener noreferrer">here</a></i></p>
            </div>
        ),
        "Overview": (
            <div id="overview" className="subHeading">
                <h2>Overview</h2>
                <p>ThinCats Australia helps companies raise loans ranging from <strong>$50k</strong> to <strong>$300k</strong>. Borrowers can apply for loans directly through ThinCats Australia or through our network of <a href="#sponsors-introducers" target="_blank" rel="noopener noreferrer">Sponsors and Introducers</a>.</p>
                <p>Our Credit team reviews loan applications and supporting documentation, assesses the security on offer and helps the borrower to prepare an information pack to be presented to lenders on the platform. We answer questions from lenders during the loan auction and monitor the loan after it has been completed.</p>
                <h2>What does the platform offer?</h2>
                <p>The Platform allows business loans ranging from <strong>$50k</strong> to <strong>$300k</strong> repayable in fixed monthly instalments over periods ranging from 2 to 5 years at competitive rates. The amount of the fixed monthly repayments depends upon the amount borrowed, the rate of interest and the loan period.</p>
                <p>All our loans are flexible with full early repayment accepted at any time without any additional costs or interest, and the longer terms allow the borrower to use the funds for a range of working capital and longer term purposes.</p>
            </div>
        ),
        "Who do we want to work with": (
            <div id="who_do_we_want_to_work_with" className="subHeading">
                <h2>Who do we want to work with?</h2>
                <ul>
                    <li><strong>Small and medium sized companies that require loans for growth</strong> including working capital, equipment finance, infrastructure finance and business acquisition finance.</li>
                    <li><strong>Experienced business operators</strong> who can demonstrate the ability to service the debt.</li>
                </ul>
                <p>Please download the key <a href="/assets/borrowed_assets/Key-Guidelines-for-Borrowers-apr18.pdf" target="_blank" rel="noopener noreferrer">borrowing criteria </a>to get a broad understanding of eligibility criteria that we evaluate before listing a loan on the ThinCats Australia platform.</p>
            </div>
        ),
        "What are your fees": (
            <div id="what_are_your_fees" className="subHeading">
                <h2>What are your fees?</h2>
                <p>Borrowers are charged a one-off fee of around 6% of the loan amount, payable on arrangement of the finance and usually deducted from the loan on disbursement, and a monthly loan administration fee* calculated on the outstanding loan balance, and paid in equal instalments over the term of the loan. All these fees are subject to GST.</p>
                <p>*Monthly loan administration fees start from 3% p.a. and may vary depending on the loan size, risk and other factors, however, always clarified before the loan is listed on the platform.</p>
                <p>Borrowers will also be charged legal fees and disbursements incurred by our lawyers in relation to preparation of loan security documentation.</p>
                <p>Where loans are originated by Sponsors or Introducers, we will based on our own arrangements, share some of our fees with individual Sponsors and Introducers.</p>
                <h2><a href="/borrowing/apply-loan/" target="_blank" rel="noreferrer noopener">Apply for a loan</a></h2>
                <p style={{textAlign: "left"}}><strong>If you have any questions, please call 1300 325 342</strong></p>
            </div>
        ),
        "Borrowing FAQ": (
            <div id="borrowing_faq" className="subHeading">
                <h2>Borrowing FAQ</h2>
                <p>Use the list below to navigate to the different sections:</p>
                <nav className="faq-nav">
                    <ul>
                        <li><a href="#faq-regulation">Regulation</a></li>
                        <li><a href="#faq-loan-security">Loan Security</a></li>
                        <li><a href="#faq-default-rates">Default rate and recovery on default</a></li>
                        <li><a href="#faq-interest-rates">Interest rates</a></li>
                        <li><a href="#faq-sponsors">Sponsors &amp; Introducers</a></li>
                        <li><a href="#faq-borrowers">Borrowers</a></li>
                        <li><a href="#faq-DR">Dispute Resolution</a></li>
                    </ul>
                </nav>
                <div className="subHeading">
                    <h2 id="faq-regulation">Regulation</h2>
                    <p></p>
                    <h3>How is ThinCats Australia regulated?</h3>
                    <p>ThinCats Australia is regulated by the Australian Securities and Investments Commission (ASIC) and is the holder of an Australian financial services licence (AFSL 488196).</p>
                </div>
                <div className="subHeading">
                    <h2 id="faq-loan-security">Loan Security</h2>
                    <p></p>
                    <h3>How are loans secured?</h3>
                    <p>All loans are generally secured by a first charge over the assets of the borrower company and recorded on the Personal Property Securities Register. In some cases, a subsequent charge (not first) may be necessary if the first charge is with the borrowers main trading bankers. In addition a personal guarantee is obtained from each of the directors. In certain circumstances a further security by way of a subsequent mortgage over the directors and/or guarantors real property may also be required.</p>
                </div>
                <div className="subHeading">
                    <h2 id="faq-default-rates">Default rate and recovery on default</h2>
                    <p></p>
                    <h3>What do you count as a default?</h3>
                    <p>The internal classification of overdue borrower repayments are as follows:<br />
                    1) Past due – a repayment has not been made by the contractual due date and remains overdue for up to 29 days;<br />
                    2) Delinquency – a repayment is overdue for 30-89 days;<br />
                    3) Default – the earlier of any of the following:<br />
                    (i) a repayment is overdue 90+ days;<br />
                    (ii) the Company is in External Administration/Receiver Manager appointed;<br />
                    (iii) Director/Guarantor is declared bankrupt.</p>
                    <p>The nature and extent of the delay in repayment will determine aspects such as reporting, default amount, recovery prospects and further actions.</p>
                    <p>Due to the small size of the ThinCats Australia loan portfolio, we currently do not publish loan default rates. For information on ThinCats UK loan default rates click <a href="/investors/statistics/" rel="noopener noreferrer" target="_blank">here</a>.</p>
                    <h3>What do you do to recover the funds?</h3>
                    <p>As all loans are secured by a charge over the borrower company’s assets and personal guarantees from directors, and assuming in a liquidation scenario the company’s assets have not significantly deteriorated in value, a loss of principal and or interest is not anticipated. However when allowing for recovery costs and diminished asset values, this may not always result in a positive outcome.</p>
                    <p>If the borrower defaults, typically specialised third party collection agents will be appointed to commence recovery action on behalf of the lenders and the first call is on the specific security given by the borrower. If enforcement of a security is not adequate, arrangements are made to call on the personal guarantees.</p>
                </div>
                <div className="subHeading">
                    <h2 id="faq-interest-rates">Interest rates</h2>
                    <p></p>
                    <h3>How is the rate of interest decided?</h3>
                    <p>We currently facilitate fixed-interest loans only, where the borrower offers a single fixed interest rate and the loan is filled on a first-come-first-served basis.</p>
                    <h3>How is it calculated?</h3>
                    <p>The interest rates quoted are per annum and is calculated each month on the outstanding capital e.g. if the annual interest rate is 12%, the monthly interest rate is 1% (12% divided by 12 months) on the outstanding capital. As the loan is repaid in equal monthly instalments you will be receiving part of your capital back each month and so the size of the loan will reduce each month and you will have received slightly less than half of your money back at the half way point of your loan term. This means that although the interest rate stays the same it will apply to a progressively smaller capital amount. It works just like a mortgage (but in reverse).</p>
                </div>
                <div className="subHeading">
                    <h2 id="faq-borrowers">Borrowers</h2>
                    <p></p>
                    <h3>How do you assess the borrowers?</h3>
                    <p>ThinCats Australia will undertake a detailed assessment of the borrower’s affairs (including a review of the borrower’s financial position, business plans, key personnel and key clients, security to be offered and the borrower’s ability to repay a loan). They then prepare a report (which is confirmed and signed by the borrower). The report is similar to the type that a bank might produce internally in addition to a detailed credit application on the borrower’s behalf. An information pack is published on the platform for lenders to review and download.</p>
                </div>
                <div className="subHeading">
                    <h2 id="faq-DR">Dispute Resolution</h2>
                    <p></p>
                    <h3>How do you resolve customer complaints?</h3>
                    <p>If you have a complaint, please submit it via email to management@thincats.com.au and we will ensure it is dealt with promptly in accordance with our internal dispute resolution policy.</p>
                </div>
                <p> </p>
            </div>
        ),
    },
    "Key Statistics": {
        "All": (
            <div id="key_statistics" className="subHeading">
                <div className="regular-page-content clearfix">
                    <h2>Key Statistics</h2>
                    <p>ThinCats Australia facilitated its first loan in February 2015.</p>
                    <p><span style={{textDecoration: "underline"}}>Loans to date:</span> <strong><span style={{color: "#0000ff"}}>$11.2 million</span>*</strong></p>
                    <p><span style={{textDecoration: "underline"}}>Average lenders per loan:</span> <span style={{color: "#0000ff"}}><strong>24</strong></span></p>
                    <p><span style={{textDecoration: "underline"}}>Average investment per loan:</span> <span style={{color: "#0000ff"}}><strong>$5,166</strong></span></p>
                    <p><span style={{textDecoration: "underline"}}><span style={{color: "#000000", textDecoration: "underline"}}>Average interest rate on loans since inception:</span></span> <strong><span style={{color: "#0000ff"}}>14.8% p.a.</span>**</strong></p>
                    <p><span style={{textDecoration: "underline"}}><span style={{color: "#000000", textDecoration: "underline"}}>Average interest rate on loans FY18 to date:</span></span> <strong><span style={{color: "#0000ff"}}>15.6% p.a.</span>**</strong></p>
                    <p><span style={{color: "#0000ff"}}><strong><span style={{textDecoration: "underline"}}>Last 10 loans</span></strong></span></p>
                    <table border="0" width="558" cellSpacing="0" cellPadding="0">
                        <colgroup>
                            <col width="236" />
                            <col width="70" />
                            <col width="80" />
                            <col width="81" />
                            <col width="91" /></colgroup>
                        <tbody>
                            <tr>
                                <td className="xl544" style={{textAlign: "left"}} width="236" height="17">
                                    <table border="0" width="558" cellSpacing="0" cellPadding="0">
                                        <colgroup>
                                            <col width="236" />
                                            <col width="70" />
                                            <col width="80" />
                                            <col width="81" />
                                            <col width="91" /></colgroup>
                                        <tbody>
                                            <tr>
                                                <td className="xl544" width="236" height="17"><strong>Business Type</strong></td>
                                                <td className="xl535" style={{textAlign: "center"}} width="70"><strong>State</strong></td>
                                                <td className="xl536" style={{textAlign: "center"}} width="80"><strong>$</strong></td>
                                                <td className="xl535" style={{textAlign: "center"}} width="81"><strong>Rate</strong></td>
                                                <td className="xl535" style={{textAlign: "center"}} width="91"><strong>Term</strong></td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Restaurant</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">VIC</td>
                                                <td className="xl538" style={{textAlign: "right"}}> 125,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>16.0%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Wholesale – Fruit &amp; Vegetable</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">NSW</td>
                                                <td className="xl538" style={{textAlign: "right"}}> 285,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>16.0%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Childcare Centre</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">ACT</td>
                                                <td className="xl538" style={{textAlign: "right"}}> 255,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>15.5%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Regional Hotel</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">VIC</td>
                                                <td className="xl538" style={{textAlign: "right"}}> 275,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>15.0%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 months</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Fast food restaurant</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">NSW</td>
                                                <td className="xl538" style={{textAlign: "right"}}> 150,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>15.5%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Gym</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">NSW</td>
                                                <td className="xl538" style={{textAlign: "right"}}> 240,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>16.0%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Retail – Flooring</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">QLD</td>
                                                <td className="xl538" style={{textAlign: "right"}}> 80,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>16.5%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Supermarket</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">QLD</td>
                                                <td className="xl538" style={{textAlign: "right"}}> 220,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>15.0%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Financial Services</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">NSW</td>
                                                <td className="xl538" style={{textAlign: "right"}}> 115,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>16.5%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Retail – Nail Spa</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">NSW</td>
                                                <td className="xl538" style={{textAlign: "right"}}> 100,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>18.0%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>2.5 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17"></td>
                                                <td className="xl543" width="70"></td>
                                                <td className="xl538"> <span style={{color: "#0000ff"}}>1,845,000</span></td>
                                                <td className="xl539"></td>
                                                <td className="xl540"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td className="xl535" style={{textAlign: "center"}} width="70"></td>
                                <td className="xl536" style={{textAlign: "right"}} width="80"></td>
                                <td className="xl535" style={{textAlign: "right"}} width="81"></td>
                                <td className="xl535" style={{textAlign: "right"}} width="91"></td>
                            </tr>
                            <tr>
                                <td className="xl537" style={{textAlign: "right"}} width="236" height="17"></td>
                                <td className="xl545" style={{textAlign: "right"}} width="70"></td>
                                <td className="xl541" style={{textAlign: "right"}}></td>
                                <td className="xl539" style={{textAlign: "right"}}></td>
                                <td className="xl540" style={{textAlign: "right"}}></td>
                            </tr>
                        </tbody>
                    </table>
                    <p><span style={{color: "#0000ff"}}><strong><span style={{textDecoration: "underline"}}>Loans by Industry and Location</span></strong></span></p>
                    <table border="0" width="594" cellSpacing="0" cellPadding="0">
                        <colgroup>
                            <col width="156" />
                            <col width="57" />
                            <col width="41" />
                            <col width="63" />
                            <col width="56" />
                            <col width="70" />
                            <col width="56" />
                            <col width="36" />
                            <col width="59" /></colgroup>
                        <tbody>
                            <tr>
                                <td className="xl541" width="200" height="16"><strong>Industry</strong></td>
                                <td className="xl541" style={{textAlign: "right"}} width="75"><strong>$’000</strong></td>
                                <td className="xl541" width="41"><strong> </strong></td>
                                <td className="xl541" style={{textAlign: "center"}} width="63"><strong>%</strong></td>
                                <td className="xl533" style={{textAlign: "center"}} width="56"><strong> </strong></td>
                                <td className="xl539" style={{textAlign: "center"}} width="70"><strong>State</strong></td>
                                <td className="xl540" style={{textAlign: "right"}} width="56"><strong>$’000</strong></td>
                                <td className="xl540" style={{textAlign: "center"}} width="36"><strong> </strong></td>
                                <td className="xl540" style={{textAlign: "center"}} width="59"><strong> %</strong></td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Accommodation &amp; Food</td>
                                <td className="xl543" align="right"> 1,377</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>12%</td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}>ACT</td>
                                <td className="xl543" style={{textAlign: "right"}} align="right"> 385</td>
                                <td className="xl543" style={{textAlign: "center"}}></td>
                                <td className="xl544" style={{textAlign: "center"}}>3%</td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Agriculture</td>
                                <td className="xl543" align="right"> 165</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>1%</td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}>NSW</td>
                                <td className="xl543" style={{textAlign: "right"}} align="right"> 5,836</td>
                                <td className="xl543" style={{textAlign: "center"}}></td>
                                <td className="xl544" style={{textAlign: "center"}}>52%</td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Building &amp; Construction</td>
                                <td className="xl543" align="right"> 710</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>6%</td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}>NT</td>
                                <td className="xl543" style={{textAlign: "right"}} align="right"> 195</td>
                                <td className="xl543" style={{textAlign: "center"}}></td>
                                <td className="xl544" style={{textAlign: "center"}}>2%</td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Education &amp; Training</td>
                                <td className="xl543" align="right"> 280</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>3%</td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}>QLD</td>
                                <td className="xl543" style={{textAlign: "right"}} align="right"> 2,327</td>
                                <td className="xl543" style={{textAlign: "center"}}></td>
                                <td className="xl544" style={{textAlign: "center"}}>21%</td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Health</td>
                                <td className="xl543" align="right"> 928</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>8%</td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}>SA</td>
                                <td className="xl543" style={{textAlign: "right"}} align="right"> 470</td>
                                <td className="xl543" style={{textAlign: "center"}}></td>
                                <td className="xl544" style={{textAlign: "center"}}>4%</td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Manufacturing</td>
                                <td className="xl543" align="right"> 410</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>4%</td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}>VIC</td>
                                <td className="xl543" style={{textAlign: "right"}} align="right"> 1,404</td>
                                <td className="xl543" style={{textAlign: "center"}}></td>
                                <td className="xl544" style={{textAlign: "center"}}>13%</td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Media</td>
                                <td className="xl543" align="right"> 385</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>3%</td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}>WA</td>
                                <td className="xl543" style={{textAlign: "right"}} align="right"> 536</td>
                                <td className="xl543" style={{textAlign: "center"}}></td>
                                <td className="xl544" style={{textAlign: "center"}}>5%</td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Renewable Energy</td>
                                <td className="xl543" align="right"> 1,095</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>10%</td>
                                <td className="xl534" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}><span style={{color: "#0000ff"}}>Total</span></td>
                                <td className="xl546" style={{textAlign: "right"}} align="right"><span style={{color: "#0000ff"}}> 11,153</span></td>
                                <td className="xl546" style={{textAlign: "center"}}><span style={{color: "#0000ff"}}> </span></td>
                                <td className="xl544" style={{textAlign: "center"}}><span style={{color: "#0000ff"}}>100%</span></td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Retail</td>
                                <td className="xl543" align="right"> 1,528</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>14%</td>
                                <td className="xl534" style={{textAlign: "center"}}></td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Services</td>
                                <td className="xl543" align="right"> 2,263</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>20%</td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                                <td className="xl533"></td>
                                <td className="xl533"></td>
                                <td className="xl533"></td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Transport</td>
                                <td className="xl543" align="right"> 50</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>1%</td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Wholesale</td>
                                <td className="xl543" align="right"> 1,962</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>18%</td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16"><span style={{color: "#0000ff"}}>Total</span></td>
                                <td className="xl543" align="right"><span style={{color: "#0000ff"}}> 11,153</span></td>
                                <td className="xl543"><span style={{color: "#0000ff"}}> </span></td>
                                <td className="xl544" style={{textAlign: "center"}}><span style={{color: "#0000ff"}}>100%</span></td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                            </tr>
                        </tbody>
                    </table>
                    <p>*:  All loans to date (except for 2 loans) are monthly principal &amp; interest repayment loans<br />
                    **: Gross returns before fees, taxes and potential losses on loans</p>
                    <p><span style={{color: "#0000ff"}}>Data as at 30 April 2018</span></p>
                </div>
            </div>
        ),
    },
    "Sponsors": {
        "Who are Sponsors and what do they do": (
            <div id="who_are_sponsors_and_what_do_they_do" className="subHeading">
                <h2>Who are sponsors and what do they do?</h2>
                <p>Sponsors are experienced and licensed finance broking entities selected by ThinCats Australia to assist in the origination of business loans on the platform.</p>
                <p>They assess business proposals, review loan applications and help the borrower to prepare the information pack to be presented to lenders on the platform. This includes meeting with the borrower and getting to know their business as well as assessing the security on offer.</p>
            </div>
        ),
        "What are the benefits of being a Sponsor": (
            <div id="what_are_the_benefits_of_being_a_sponsor" className="subHeading">
                <h2>What are the benefits of being a Sponsor?</h2>
                <p>Sponsors are part of the ThinCats Australia network and play an important role in helping SMEs to grow and achieve their business goals.</p>
                <p>ThinCats will pay a commission of up to 60 basis points (plus GST) upfront on loan disbursement.</p>
                <p>If you are interested in becoming a Sponsor please complete the <a href="/assets/borrowed_assets/Sponsor-Application-Form-May16.docx">Application Form</a> and email it to <a title="sponsors@thincats.com.au" href="mailto:sponsors@thincats.com.au">sponsors@thincats.com.au</a>.</p>
            </div>
        ),
        "Who are Introducers": (
            <div id="who_are_introducers" className="subHeading">
                <h2>Who are introducers</h2>
                <p>The role of an Introducer is to refer SME businesses who wish to seek funding through the ThinCats Australia platform.</p>
                <p>ThinCats will pay a referral fee of 25 basis points (plus GST) on the successful completion of the loan.</p>
                <p>If you have a potential transaction please email details to loans@thincats.com.au or call us on 1300 325 342.</p>
                <h2>General guidelines on eligible loans</h2>
                <p>Please download the key <a href="/assets/borrowed_assets/2018/04/Key-Guidelines-for-Borrowers-apr18.pdf" rel="noopener noreferrer" target="_blank">borrowing criteria </a>to get a broad understanding of eligibility criteria that we evaluate before listing a loan on the ThinCats Australia platform.</p>
                <p style={{textAlign: "left"}}>
                </p><p><strong>If you have any questions, please call 1300 325 342</strong></p>
            </div>
        ),
    },
    "About us": {
        "ThinCats": (
            <div id="thincats" className="subHeading">
                <h2>ThinCats</h2>
                <p>ThinCats Australia provides an online market for secured business loans to Australian companies. It is regulated by the Australian Securities and Investments Commission (ASIC) and is the holder of an Australian financial services licence (AFSL 488196).</p>
                <p>ThinCats Australia links wholesale investors (which includes qualifying sophisticated investors, professional investors, high-net-worth investors and trustees of self-managed superannuation funds) with established SME corporate borrowers to provide a serious alternative to bank lending.</p>
                <p>ThinCats Australia benefits from a strong relationship with the successful <a href="/">ThinCats UK</a> business which was founded in 2010.</p>
                <p>We offer a fixed income asset class which is relatively untapped by investors in Australia and which provides a competitive rate of interest subject to potential losses. Lenders make their own decision in choosing loans and the proportion of the loan they wish to invest in.</p>
                <p>Intended to meet the needs of any qualifying investor managing an investment portfolio (including individuals, super fund managers and companies with surplus cash deposits), ThinCats Australia provides direct access to an Australian market sector traditionally occupied by banks.</p>
                <p>Borrowers can access loans of up to $2m over periods ranging from 2 to 5 years or more at competitive rates in order to develop their business.</p>
                <div></div>
            </div>
        ),
        "Contact Us": (
            <div id="contact_us" className="subHeading">
                <h2>Contact Us</h2>
                <h4>Seeking a Loan?</h4>
                <p>If you are interested in applying for a loan, please contact us by emailing <a href="mailto:loans@thincats.com.au">loans@thincats.com.au</a> with the name, address and ABN of your company, a brief description of its activities, the amount you wish to borrow, and the reason for borrowing.</p>
                <h4>Interested in Lending?</h4>
                <p>If you are interested in joining as a Lender and would like some more information please email <a href="mailto:info@thincats.com.au">info@thincats.com.au</a>.</p>
                <h4>Looking to become a Sponsor or Introducer?</h4>
                <p>If you are interested in becoming an Introducer or Sponsor please click <a title="About Sponsors and Introducers" href="/sponsors-introducers/about-sponsors-introducers/" rel="noopener noreferrer" target="_blank">About Sponsors And Introducers</a> for more information.</p>
            </div>
        ),
        "General questions": (
            <div id="general_questions" className="subHeading">
                <h2>General Questions</h2>
                <p>If you have a general question please send an email to <a href="mailto:info@thincats.com.au">info@thincats.com.au</a>.</p>
                <p>
                To speak to a team member, please call <strong>1300 325 342</strong></p>
                <p><strong>ThinCats Australia, Level 2, 222 Pitt Street, Sydney 2000</strong></p>
            </div>
        ),
        "Our Team": (
            <div id="our_team" className="subHeading">
                <h2>Our Team</h2>
                <p>The ThinCats Australia team comprise professionals with significant local and international experience in a wide range of disciplines including:</p>
                <table style={{width: "100%"}}>
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
                <p><span style={{textDecoration: "underline"}}><span style={{color: "#000000"}}><strong>MANAGEMENT TEAM</strong></span></span></p>
                <p><strong>Sunil Aranha</strong> (Chief Executive Officer and Director), with over 25 years of international and local SME sector banking experience in general management roles within Citibank, Efic and Commonwealth Bank. Also established a successful technology start-up in the entertainment technology sector in early 2000.</p>
                <p><strong>Harsha Nair</strong> (Chief Financial &amp; Operating Officer), with over 25 years of financial control, regulatory compliance and product development experience with banks and brokers including Commonwealth Bank, JPMorgan Chase and Morgan Stanley.</p>
                <p><strong>Frank Willenberg</strong> (Chief Risk Officer and Director), with over 35 years credit and risk management experience in SME, MME, Business Lending, Commercial Real Estate and Consumer Lending in Australia, and overseas markets in particular USA and the Asia Pacific Region. Most recently he retired as a Senior Vice President for Commercial Banking, Credit and Risk Management at Citibank in Australia.</p>
                <p><strong>Paul Kyriacou</strong> (General Manager – Business Development &amp; Risk), with over 20 years of banking and financial services experience in senior roles with major domestic and international financial institutions including DBS Bank, CBA, Rabo Bank, Westpac and EFIC.</p>
                <p><span style={{textDecoration: "underline"}}><strong>CONSULTANT</strong></span></p>
                <div title="Page 15">
                    <div>
                        <div>
                            <div>
                                <p><strong>David Williams</strong> (Marketing), has over 25 years management and strategic marketing experience gained through positions with leading advertising agencies and as Marketing Director of blue chip Australian companies. David has worked on strategy and creative across a range of businesses including Westfield, Hoyts, NRMA, Event Cinemas and Citibank.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p><span style={{textDecoration: "underline"}}><strong>ADVISORS</strong></span></p>
                <p><strong>Alan Kohler</strong> (Advisor & Mentor), a financial journalist for over 40 years, has been Editor of both the Australian Financial Review and The Age. He also worked for the Australian Broadcasting Corporation and John Fairfax up to 2007. In 2005 he launched Eureka Report, a newsletter for self-directed investors, and in 2007 followed up with Business Spectator, an online business news and commentary publication. In 2016 he founded a business and investment publication The Constant Investor and is currently also business editor at large of The Australian, finance presenter on ABC news and adjunct professor in the business faculty of Victoria University.</p>
                <p><strong>Nick Basile</strong> (Advisor – Strategy), has over 30 years of financial services experience primarily in investment management covering a broad spectrum of asset classes and investment styles. He has previously held various senior executive positions including Chief Investment Officer roles at several top 20 Australian companies and most recently was the Chief Investment Officer of the Suncorp Group where he was responsible for providing advice and implementing investment solutions relating to asset allocation, manager selection and mandates for Suncorp’s circa $20 billion in Funds under Management.</p>
                <p><strong>Glenwyn Baptist</strong> (Advisor – Strategy), is a 30-year veteran of the investment industry in the United States with a vast array of investment experience ranging from investment management and corporate finance to marketing and strategic planning. He is currently CEO of Prudential International Investments, responsible for managing the local asset management affiliates of Prudential Financial (US) in China, India, Taiwan, Brazil and Italy. Prior to this, he has held various positions including CIO of this unit, Head of mutual funds and managed accounts, COO for asset management and MD in charge of fixed income research.</p>
                <p><strong>Glenn Homan</strong> (Advisor – Credit), has had senior executive experience with the Australian Prudential Regulatory Authority (APRA) and leading Australian financial institutions. He is recognised internationally as an industry expert on credit risk frameworks, processes and practices, and a technical author of prudential standards and guidance on risk requirements. He has been a regular keynote speaker at various local and overseas conferences representing APRA’s view on credit risk management.</p>
                <p><strong>Andrew MacDonald</strong> (Advisor – Legal), is the principal of the law firm, Audax Legal Pty Limited. Audax Legal focuses on financial services businesses. Andrew specialises in financial products and services and corporate law. Prior to starting Audax Legal in 2002, he was a partner in PwC Legal and Director at Deutsche Bank.</p>
                <p><strong>Tim Allerton</strong> (Advisor – Public Relations), Managing Director of City Public Relations, is ThinCats Australia’s public relations strategist. He has 35 years’ experience in public relations and the media – covering the fields of print, television and video communications. City Public Relations provides ThinCats Australia with communications solutions for the ongoing promotion of the company in Australia.</p>
                <p><strong>Aditya Ghose</strong> (Advisor – IT), a computer scientist with over 25 years experience in delivering R&amp;D outcomes to industry. He is Professor of Computer Science at the University of Wollongong and Director of the Decision Systems Lab.</p>
                <p> </p>
            </div>
        ),
    },
}
