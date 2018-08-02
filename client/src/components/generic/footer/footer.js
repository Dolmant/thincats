// @flow
import React from "react"
import "./footer.less"

type Props = {
};

export default class Footer extends React.Component<Props> {
    render() {
        return (
            <div className="footer">
                <div className="block">
                    <p className="bold">Address: Level 2, 222 Pitt Street, Sydney, NSW 2000. Telephone: 1300 325 342.</p><p>Copyright © ThinCats Australia Group Holdings Pty Ltd  2014. All rights reserved.</p><p>ThinCats Australia Pty Ltd (ABN 87 169 752 747) and ThinCats Australia Nominees Pty Ltd (ABN 95 601 494 026) are wholly owned subsidiaries of ThinCats Australia Group Holdings Pty Ltd (ABN 50 169 700 298).</p>
                    <p>ThinCats Australia Pty Ltd holds an Australian financial services licence (AFSL No. 488196) and ThinCats Australia Nominees Pty Ltd (AR No. 469495) is its Authorised Representative.</p>
                    <p>ThinCats Australia Group Holdings Pty Ltd works with, and is partly owned by Business Loan Network Limited, the UK entity which operates<a title="ThinCats UK." href="http://www.thincats.com" rel="noopener noreferrer" target="_blank">ThinCats UK.</a></p>
                    <p>A reference to “us”, “we” or “ThinCats Australia” on this website is a reference to ThinCats Australia Pty Ltd, its associates, successors and assignees from time to time.</p>
                    <p>ThinCats and the cat logo are registered Trade Marks of ThinCats Australia Group Holdings Pty Ltd.</p>
                    <div id="p2p_logo_container" className="">
                        <hr />
                        <div className="bottm-text"> </div>
                    </div>
                </div>
            </div>
        )
    }
}
