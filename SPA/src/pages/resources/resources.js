// @flow
import React from "react"
import "./resources.less"

type Props = {
};

export default class Resources extends React.Component<Props> {
    render() {
        return (
            <div className="resources">
                <section className="page-title clearfix">
                    <h1>Resources</h1>
                </section>
                <section className="regular-page-content clearfix">
                    <p><b>Lenders</b></p>
                    <ul>
                        <li><a href="/assets/borrowed_assets/TCA-Lender-Fact-Sheet-31March2018.pdf" target="_blank" rel="noopener noreferrer">Lender Fact Sheet</a></li>
                        <li><a href="/assets/borrowed_assets/TCA-Membership-Agreement-May16.pdf" target="_blank" rel="noopener noreferrer">Membership Agreement</a></li>
                        <li><a href="/assets/borrowed_assets/TCA-Member-Application-Form-April-2018.docx">Member Application Form</a></li>
                        <li><a href="/assets/borrowed_assets/TCA-Accountant-Certificate-Template-May16.doc">Accountant’s Certificate Template</a></li>
                        <li><a href="/assets/borrowed_assets/TCA-Process-for-Non-resident-Applicants-April-2018.pdf" target="_blank" rel="noopener noreferrer">Process for Non-resident Applicants</a></li>
                        <li><a href="/assets/borrowed_assets/ThinCats-Lender-Guide-Dec16.pdf" target="_blank" rel="noopener noreferrer">Platform User Guide for Lenders</a></li>
                        <li><a href="/assets/borrowed_assets/TCA-Loan-Repayment-Calculator-July-2016.xlsx">Lender Loan Repayment Calculator (Principal and Interest Loan)</a></li>
                    </ul>
                    <p><b>Borrowers</b></p>
                    <ul>
                        <li><a href="/assets/borrowed_assets/TCA-Borrower-Important-Information-April-2018.pdf" target="_blank" rel="noopener noreferrer">Borrower Important Information</a></li>
                        <li><a href="/assets/borrowed_assets/Key-Guidelines-for-Borrowers-apr18.pdf" target="_blank" rel="noopener noreferrer">Key Guidelines for Borrowers</a></li>
                        <li><a href="https://fs27.formsite.com/Thincats/form8/form_login.html" target="_blank" rel="noopener noreferrer">Loan Application Form</a></li>
                        <li><a href="/assets/borrowed_assets/Privacy-Disclosure-Statement-and-Consent-July-2017.pdf" target="_blank" rel="noopener noreferrer">Privacy Disclosure Statement and Consent</a></li>
                        <li><a href="/assets/borrowed_assets/Privacy-Fact-Sheet-29.pdf" target="_blank" rel="noopener noreferrer">Privacy fact sheet 29</a></li>
                        <li><a href="/assets/borrowed_assets/Privacy-Fact-Sheet-40.pdf" target="_blank" rel="noopener noreferrer">Privacy fact sheet 40</a></li>
                        <li><a href="/assets/borrowed_assets/ThinCats-Borrower-Loan-Calculator-PI-July-2016.xlsx">Borrower Loan Repayment Calculator (Principal and Interest Loan)</a></li>
                    </ul>
                    <p>&nbsp;</p>
                </section>
            </div>
        )
    }
}
