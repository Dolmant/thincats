// @flow
import React from "react"
import "./lendingFAQ.less"

type Props = {
};

export default class LendingFAQ extends React.Component<Props> {
    render() {
        return (
            <div className="lendingFAQ">
                <section className="page-title clearfix">
                    <h1>Lending FAQ</h1>
                </section>
                <section className="regular-page-content clearfix">
                    <p>Use the list below to navigate to the different sections:</p>
                    <nav className="faq-nav">
                        <ul>
                            <li><a href="#faq-regulation">Regulation</a></li>
                            <li><a href="#faq-loan-security">Loan Security</a></li>
                            <li><a href="#faq-default-rates">Default rate and recovery&nbsp;on default</a></li>
                            <li><a href="#faq-interest-rates">Interest rates</a></li>
                            <li><a href="#faq-my-account">Funding, repayments and withdrawals</a></li>
                            <li><a href="#faq-overseas">Overseas&nbsp;members</a></li>
                            <li><a href="#faq-sponsors">Sponsors &amp; Introducers</a></li>
                            <li><a href="#faq-borrowers">Borrowers</a></li>
                            <li><a href="#faq-memberfees">Member&nbsp;Fees</a></li>
                            <li><a href="#faq-tax">Tax</a></li>
                            <li><a href="#faq-risk">Risk</a></li>
                            <li><a href="#faq-Selfm">Self Managed Super Funds</a></li>
                            <li><a href="#faq-nominees">ThinCats&nbsp;Australia Nominees Pty Ltd &nbsp;<strong>(TCAN)</strong></a></li>
                            <li><a href="#faq-DR">Dispute Resolution</a></li>
                        </ul>
                    </nav>
                    <div className="faq-section">
                        <h2 id="faq-regulation">Regulation</h2>
                        <p></p>
                        <h3>How is ThinCats Australia regulated?</h3>
                        <p>ThinCats Australia is regulated by the Australian Securities and Investments Commission (ASIC) and is the holder of an Australian financial services licence (AFSL 488196).</p>
                    </div>
                    <div className="faq-section">
                        <h2 id="faq-loan-security">Loan Security</h2>
                        <p></p>
                        <h3>How are loans secured?</h3>
                        <p>All loans are generally secured by a first charge over the assets of the borrower company and recorded on the Personal Property Securities Register. In some cases, a subsequent charge (not first) may be necessary if the first charge is with the borrowers main trading bankers. In addition a personal guarantee is obtained from each of the directors. In certain circumstances a further security by way of a subsequent mortgage over the directors and/or guarantors real property may also be required.</p>
                    </div>
                    <div className="faq-section">
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
                    <div className="faq-section">
                        <h2 id="faq-interest-rates">Interest rates</h2>
                        <p></p>
                        <h3>How is the rate of interest decided?</h3>
                        <p>We currently facilitate fixed-interest loans only, where the borrower offers a single fixed interest rate and the loan is filled on a first-come-first-served basis.</p>
                        <h3>How is it calculated?</h3>
                        <p>The interest rates quoted are per annum and is calculated each month on the outstanding capital e.g. if the annual interest rate is 12%, the monthly interest rate is 1% (12% divided by 12 months) on the outstanding capital. As&nbsp;the loan is repaid in equal monthly instalments you will be receiving part of your capital back each month and so the size of the loan will reduce each month and you will have received slightly less than half of your money back at the half way point of your loan term. This means that although the interest rate stays the same it will apply to a progressively smaller capital amount. It works just like a mortgage (but in reverse).</p>
                    </div>
                    <div className="faq-section">
                        <h2 id="faq-my-account">Funding, repayments and withdrawals</h2>
                        <p></p>
                        <h3>How are my funds held by ThinCats Australia?</h3>
                        <p>All of our Members’ funds are held by TCAN as security trustee for each Lender, with leading Australian banks in designated client money trust accounts, in accordance with the security trust deed.</p>
                        <h3>Do I receive interest on my funds?</h3>
                        <p>We will pay interest on members cash balances at current rates offered by our banks for ‘saver’ accounts. Interest will be calculated daily on the sum of the Available Cash and Current Bids, as reflected on the Dashboard, and credited monthly in the first week of the following month.</p>
                        <h3>How can I pay funds into my Member Account?</h3>
                        <p>Members fund their account by logging in and clicking the “Add Funds” link on the top of the page to notify us of their intention to transfer funds and subsequently transferring funds from their bank account (refer details below).</p>
                        <p><strong>Online transfer:</strong></p>
                        <p>To do this you will need to use the following details:</p>
                        <p><strong>Account Name: </strong>THINCATS AUSTRALIA NOMINEES PTY LTD Client Money Trust</p>
                        <p><strong>Bank: </strong>Commonwealth Bank of Australia (309 George Street, Sydney NSW 2000)</p>
                        <p><strong>BSB : </strong>062-009</p>
                        <p><strong>Account Number: </strong>10789801</p>
                        <p><strong>SWIFT Code: </strong>CTBAAU2S (for overseas transfers)</p>
                        <p><i>When transferring funds, please quote your numeric user id (top right of screen) and initials in the description field so that we can identify your transfer and promptly credit your platform account.</i></p>
                        <h3>When do deposits show in my Member Account?</h3>
                        <p>We review bank account receipts each business day and will credit the funds received to your member account within one business day of receipt of your funds with the correct reference.</p>
                        <h3>When do repayments show in my Member Account?</h3>
                        <p>Each borrower will be required to make monthly repayments into our client money trust accounts. Following receipt of cleared funds, we will credit your member account within one business day.</p>
                        <h3>How do I withdraw money from my account?</h3>
                        <p>Members may only transfer uncommitted funds out of their account at any time by clicking the “Take” link on their Dashboard. We will pay your funds to your nominated account and we reserve the right to request a copy of your bank statement prior to payment. Funds will be transferred within two business days after receipt of your request.</p>
                        <h3>How can I get back money lent, if my circumstances change?</h3>
                        <p>We are working towards having a secondary market in place in the future which will allow lenders to sell their loans. It must be noted that when there is a known problem or uncertainty over a loan we will not allow it to be sold on the secondary market. An example of this is if a borrower has missed a repayment or we are aware of facts that reliably indicate the borrower might be about to repay the loan early.</p>
                    </div>
                    <div className="faq-section">
                        <h2 id="faq-overseas">Overseas Members</h2>
                        <p></p>
                        <h3>Can I be a Member if I reside outside Australia?</h3>
                        <p><span style={{color: "#222222"}}>Generally yes, but it also depends on the jurisdiction where the proposed Member resides.&nbsp; We will assess each overseas applicant on their individual merits and decide if they qualify to be a member. Find out more about the&nbsp;<a href="/assets/borrowed_assets/TCA-Process-for-Non-resident-Applicants-April-2018.pdf" rel="noopener noreferrer" target="_blank">Process for Non-resident Applicants</a></span><b></b><span style={{color: "#222222"}}>&nbsp;or contact us at&nbsp;</span><a href="mailto:admin@thincats.com.au" rel="noopener noreferrer" target="_blank">admin@thincats.com.au</a>.</p>
                    </div>
                    <div className="faq-section">
                        <h2 id="faq-sponsors">Sponsors and Introducers</h2>
                        <p></p>
                        <h3>What do the sponsors and introducers do?</h3>
                        <p>Sponsors are experienced and licensed finance broking entities selected by ThinCats Australia to assist in the origination of business loans on the platform.</p>
                        <p>Introducers refer potential SME borrowers to ThinCats Australia.</p>
                        <p>More details about Sponsors and Introducers are available <a title="Sponsors &amp; Introducers" href="/sponsors-introducers/">here</a>.</p>
                    </div>
                    <div className="faq-section">
                        <h2 id="faq-borrowers">Borrowers</h2>
                        <p></p>
                        <h3>How do you assess the borrowers?</h3>
                        <p>ThinCats Australia will undertake a detailed assessment of the borrower’s affairs (including a review of the borrower’s financial position, business plans, key personnel and key clients, security to be offered and the borrower’s ability to repay a loan).&nbsp; They then prepare a report (which is confirmed and signed by the borrower). The report is similar to the type that a bank might produce internally in addition to a detailed credit application on the borrower’s behalf. An information pack is published on the platform for lenders to review and download.</p>
                    </div>
                    <div className="faq-section">
                        <h2 id="faq-memberfees">Member Fees</h2>
                        <p></p>
                        <h3>Do you charge any fees for Membership?</h3>
                        <p>We currently do not charge any fees. Membership is free and there are no loan management fees.</p>
                    </div>
                    <div className="faq-section">
                        <h2 id="faq-tax">Tax</h2>
                        <p></p>
                        <h3>Does ThinCats Australia calculate and deduct income tax on behalf of lenders?</h3>
                        <p>We do not deduct any tax on interest received by lenders. It is each Lender’s responsibility to declare any money earned through loans made on the ThinCats Australia Platform to their respective tax authority. You can see an indication of how much interest you have earned in the tax year from your dashboard by setting the correct date ranges and looking at your repayment summary.&nbsp; This information is indicative only.</p>
                    </div>
                    <div className="faq-section">
                        <h2 id="faq-risk">Risk</h2>
                        <p></p>
                        <h3>How risky are these loans compared to banks deposits and equity investments?</h3>
                        <p>There is no doubt that there is significantly more risk in lending directly to SMEs (compared with a Member depositing funds with a bank) because a bank is intensely regulated, subject to many laws and typically benefits from a large and diverse revenue and collateral base.&nbsp; An equity investment depends on many different economic and legal differences.&nbsp; Members who make a loan are not investing in ThinCats Australia nor are they pooling their investments with other Lenders.&nbsp; Therefore it might not be reasonable to compare loans made through the Platform with bank deposits or equity investments.&nbsp; Instead, you should consider comparing against other comparable lending.&nbsp; Depending upon the type of deal you select and the way in which your money is spread across a number of loans the overall risk should be reduced.</p>
                    </div>
                    <div className="faq-section">
                        <h2 id="faq-Selfm">Self-Managed Super Funds</h2>
                        <p></p>
                        <h3>Can my Self-Managed Super Fund make loans?</h3>
                        <p>Trustees of Self-Managed Super Funds may be members if they satisfy the wholesale investor requirement.</p>
                    </div>
                    <div className="faq-section">
                        <h2 id="faq-nominees">ThinCats Australia Nominees Pty Ltd (TCAN)</h2>
                        <p></p>
                        <h3>Who executes and manages the loans and who holds the borrower security?</h3>
                        <p>Due to the nature of the loan auction process and the fact that there may be multiple loans by each lender to a number of different borrowers, TCAN was established to act as a security trustee to hold the benefit of the security granted by a borrower to each lender and to sign loan documents and security documents on behalf of each lender. TCAN is an ASIC Authorised Representative of ThinCats Australia.</p>
                        <p>TCAN only acts as bare nominee for these and related duties.&nbsp; ThinCats Australia manages the overall process.</p>
                        <h3>If some form of action needs to be taken on a loan, how is this decided?</h3>
                        <p>If a decision is needed to be taken about varying a loan or taking legal action, lenders will be contacted by TCAN by email, asking for lenders to vote on a specific course of action in respect of a loan. The votes of each lender will be tallied based on a lender’s investment amount in a loan. The majority votes will be acted upon by TCAN.&nbsp; TCAN has some minimal discretion, such as to act in emergencies or to deal with administrative issues for greater efficiency.</p>
                    </div>
                    <div className="faq-section">
                        <h2 id="faq-DR">Dispute Resolution</h2>
                        <p></p>
                        <h3>How do you resolve customer complaints?</h3>
                        <p>If you have a complaint, please submit it via email to management@thincats.com.au and we will ensure it is dealt with promptly in accordance with our internal dispute resolution policy.</p>
                    </div>
                    <p>&nbsp;</p>
                </section>
            </div>
        )
    }
}
