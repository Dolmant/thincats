// @flow
import React from "react"
import "./keyStatistics.less"

type Props = {
};

export default class KeyStatistics extends React.Component<Props> {
    render() {
        return (
            <div className="keyStatistics">
                <section className="page-title clearfix">
                    <h1>Key Statistics</h1>
                </section>
                <section className="regular-page-content clearfix">
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
                                                <td className="xl538" style={{textAlign: "right"}}>&nbsp;125,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>16.0%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Wholesale – Fruit &amp; Vegetable</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">NSW</td>
                                                <td className="xl538" style={{textAlign: "right"}}>&nbsp;285,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>16.0%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Childcare Centre</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">ACT</td>
                                                <td className="xl538" style={{textAlign: "right"}}>&nbsp;255,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>15.5%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Regional Hotel</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">VIC</td>
                                                <td className="xl538" style={{textAlign: "right"}}>&nbsp;275,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>15.0%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 months</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Fast food restaurant</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">NSW</td>
                                                <td className="xl538" style={{textAlign: "right"}}>&nbsp;150,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>15.5%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Gym</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">NSW</td>
                                                <td className="xl538" style={{textAlign: "right"}}>&nbsp;240,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>16.0%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Retail – Flooring</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">QLD</td>
                                                <td className="xl538" style={{textAlign: "right"}}>&nbsp;80,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>16.5%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Supermarket</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">QLD</td>
                                                <td className="xl538" style={{textAlign: "right"}}>&nbsp;220,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>15.0%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Financial Services</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">NSW</td>
                                                <td className="xl538" style={{textAlign: "right"}}>&nbsp;115,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>16.5%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>3 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17">Retail – Nail Spa</td>
                                                <td className="xl543" style={{textAlign: "center"}} width="70">NSW</td>
                                                <td className="xl538" style={{textAlign: "right"}}>&nbsp;100,000</td>
                                                <td className="xl539" style={{textAlign: "center"}}>18.0%</td>
                                                <td className="xl540" style={{textAlign: "center"}}>2.5 years</td>
                                            </tr>
                                            <tr>
                                                <td className="xl537" width="236" height="17"></td>
                                                <td className="xl543" width="70"></td>
                                                <td className="xl538">&nbsp;<span style={{color: "#0000ff"}}>1,845,000</span></td>
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
                                <td className="xl541" width="41"><strong>&nbsp;</strong></td>
                                <td className="xl541" style={{textAlign: "center"}} width="63"><strong>%</strong></td>
                                <td className="xl533" style={{textAlign: "center"}} width="56"><strong>&nbsp;</strong></td>
                                <td className="xl539" style={{textAlign: "center"}} width="70"><strong>State</strong></td>
                                <td className="xl540" style={{textAlign: "right"}} width="56"><strong>$’000</strong></td>
                                <td className="xl540" style={{textAlign: "center"}} width="36"><strong>&nbsp;</strong></td>
                                <td className="xl540" style={{textAlign: "center"}} width="59"><strong>&nbsp;%</strong></td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Accommodation &amp; Food</td>
                                <td className="xl543" align="right">&nbsp;1,377</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>12%</td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}>ACT</td>
                                <td className="xl543" style={{textAlign: "right"}} align="right">&nbsp;385</td>
                                <td className="xl543" style={{textAlign: "center"}}></td>
                                <td className="xl544" style={{textAlign: "center"}}>3%</td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Agriculture</td>
                                <td className="xl543" align="right">&nbsp;165</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>1%</td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}>NSW</td>
                                <td className="xl543" style={{textAlign: "right"}} align="right">&nbsp;5,836</td>
                                <td className="xl543" style={{textAlign: "center"}}></td>
                                <td className="xl544" style={{textAlign: "center"}}>52%</td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Building &amp; Construction</td>
                                <td className="xl543" align="right">&nbsp;710</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>6%</td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}>NT</td>
                                <td className="xl543" style={{textAlign: "right"}} align="right">&nbsp;195</td>
                                <td className="xl543" style={{textAlign: "center"}}></td>
                                <td className="xl544" style={{textAlign: "center"}}>2%</td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Education &amp; Training</td>
                                <td className="xl543" align="right">&nbsp;280</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>3%</td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}>QLD</td>
                                <td className="xl543" style={{textAlign: "right"}} align="right">&nbsp;2,327</td>
                                <td className="xl543" style={{textAlign: "center"}}></td>
                                <td className="xl544" style={{textAlign: "center"}}>21%</td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Health</td>
                                <td className="xl543" align="right">&nbsp;928</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>8%</td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}>SA</td>
                                <td className="xl543" style={{textAlign: "right"}} align="right">&nbsp;470</td>
                                <td className="xl543" style={{textAlign: "center"}}></td>
                                <td className="xl544" style={{textAlign: "center"}}>4%</td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Manufacturing</td>
                                <td className="xl543" align="right">&nbsp;410</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>4%</td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}>VIC</td>
                                <td className="xl543" style={{textAlign: "right"}} align="right">&nbsp;1,404</td>
                                <td className="xl543" style={{textAlign: "center"}}></td>
                                <td className="xl544" style={{textAlign: "center"}}>13%</td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Media</td>
                                <td className="xl543" align="right">&nbsp;385</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>3%</td>
                                <td className="xl533" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}>WA</td>
                                <td className="xl543" style={{textAlign: "right"}} align="right">&nbsp;536</td>
                                <td className="xl543" style={{textAlign: "center"}}></td>
                                <td className="xl544" style={{textAlign: "center"}}>5%</td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Renewable Energy</td>
                                <td className="xl543" align="right">&nbsp;1,095</td>
                                <td className="xl543"></td>
                                <td className="xl544" style={{textAlign: "center"}}>10%</td>
                                <td className="xl534" style={{textAlign: "center"}}></td>
                                <td className="xl542" style={{textAlign: "center"}}><span style={{color: "#0000ff"}}>Total</span></td>
                                <td className="xl546" style={{textAlign: "right"}} align="right"><span style={{color: "#0000ff"}}>&nbsp;11,153</span></td>
                                <td className="xl546" style={{textAlign: "center"}}><span style={{color: "#0000ff"}}>&nbsp;</span></td>
                                <td className="xl544" style={{textAlign: "center"}}><span style={{color: "#0000ff"}}>100%</span></td>
                            </tr>
                            <tr>
                                <td className="xl545" height="16">Retail</td>
                                <td className="xl543" align="right">&nbsp;1,528</td>
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
                                <td className="xl543" align="right">&nbsp;2,263</td>
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
                                <td className="xl543" align="right">&nbsp;50</td>
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
                                <td className="xl543" align="right">&nbsp;1,962</td>
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
                                <td className="xl543" align="right"><span style={{color: "#0000ff"}}>&nbsp;11,153</span></td>
                                <td className="xl543"><span style={{color: "#0000ff"}}>&nbsp;</span></td>
                                <td className="xl544" style={{textAlign: "center"}}><span style={{color: "#0000ff"}}>100%</span></td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                                <td className="xl534"></td>
                            </tr>
                        </tbody>
                    </table>
                    <p>*: &nbsp;All loans to date (except for 2 loans) are monthly principal &amp; interest repayment loans<br />
**: Gross returns before fees, taxes and potential losses on loans</p>
                    <p><span style={{color: "#0000ff"}}><em>Data as at 30 April 2018</em></span></p>
                </section>
            </div>
        )
    }
}
