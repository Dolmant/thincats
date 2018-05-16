// @flow
import React from "react"
import "./sponsors.less"

type Props = {
};

export default class Sponsors extends React.Component<Props> {
    render() {
        return (
            <div className="sponsors">
                <section className="page-title clearfix">
                    <h1>About Sponsors and Introducers</h1>
                </section>
                <section className="regular-page-content clearfix">
                    <h2>Who are Sponsors and what do they do?</h2>
                    <p>Sponsors are experienced and licensed finance broking entities selected by ThinCats Australia to assist in the origination of business loans on the platform.</p>
                    <p>They assess business proposals, review loan applications and help the borrower to prepare the information pack to be presented to lenders on the platform. This includes meeting with the borrower and getting to know their business as well as assessing the security on offer.</p>
                    <h2>What are the benefits of being a Sponsor?</h2>
                    <p>Sponsors are part of the ThinCats Australia network and play an important role in helping SMEs to grow and achieve their business goals.</p>
                    <p>ThinCats will pay a commission of up to 60 basis points (plus GST) upfront on loan disbursement.</p>
                    <p>If you are interested in becoming a Sponsor please complete the <a href="/assets/borrowed_assets/Sponsor-Application-Form-May16.docx">Application Form</a> and email it to <a title="sponsors@thincats.com.au" href="mailto:sponsors@thincats.com.au">sponsors@thincats.com.au</a>.</p>
                    <h2>Who are Introducers?</h2>
                    <p>The role of an Introducer is to refer SME businesses who wish to seek funding through the ThinCats Australia platform.</p>
                    <p>ThinCats will pay a referral fee of 25 basis points (plus GST) on the successful completion of the loan.</p>
                    <p>If you have a potential transaction please email details to loans@thincats.com.au or call us on 1300 325 342.</p>
                    <h2>General guidelines on eligible loans</h2>
                    <p>Please download the key <a href="/assets/borrowed_assets/2018/04/Key-Guidelines-for-Borrowers-apr18.pdf" rel="noopener noreferrer" target="_blank">borrowing criteria </a>to get a broad understanding of eligibility criteria that we evaluate before listing a loan on the ThinCats Australia platform.</p>
                    <p style={{textAlign: "left"}}>
                    </p><p><em><strong>If you have any questions, please call 1300 325 342</strong></em></p>
                </section>
            </div>
        )
    }
}
