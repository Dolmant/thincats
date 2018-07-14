// @flow
import React from "react"
import "./applyForALoan.less"

type Props = {
};

export default class ApplyForALoan extends React.Component<Props> {
    render() {
        return (
            <div className="applyForALoan">
                <section className="page-title clearfix">
                    <h1>Apply for a loan</h1>
                </section>
                <section className="regular-page-content clearfix">
                    <h2 style={{textAlign: "center"}}><strong><a href="https://fs27.formsite.com/Thincats/form8/form_login.html" target="_blank" rel="noreferrer noopener">Loan Application Form</a></strong></h2>
                    <p style={{textAlign: "justify"}}>Australian companies can obtain secured business loans between <strong>$50k and $300k</strong> at competitive lending rates, through&nbsp;the ThinCats Australia peer to peer lending platform.&nbsp;To apply for a business loan, &nbsp;please check your eligibility against our general&nbsp;<a href="/assets/Key-Guidelines-for-Borrowers-apr18.pdf" target="_blank" rel="noopener noreferrer">borrowing criteria</a>&nbsp;and complete our loan application form by clicking the link above.</p>
                </section>
            </div>
        )
    }
}

