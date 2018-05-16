// @flow
import React from "react"
import "./header.less"

type Props = {
};

export default class Header extends React.Component<Props> {
    render() {
        //        <body  class="page-template-default page page-id-1314 page-child parent-pageid-1312"  class="">
        return (
            <div className="header">
                <section className="page-wrap">
                    <header data-role="page-header" className="clearfix">
                        <div className="buttons clearfix">
                            <a href="/register" className="btn-reg"><span></span>register</a>
                            <a title="Login" href="#" className="btn-log"><span></span>Log in</a>
                        </div>
                        <a href="/" className="logo"></a>
                        <nav className="main-navigation clearfix">
                            <h3> Main Menu </h3>
                            <span className="menu"></span>
                            <ul className="sf-menu">
                                <li id="menu-item-1166" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1166"><a href="/">Header</a></li>
                                <li id="menu-item-1661" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1661"><a href="/how-thincats-works/">How it works</a></li>
                                <li id="menu-item-1497" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1497"><a href="/lending/">Lending</a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-1498" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1498"><a href="/lending/about-lending/">About Lending</a></li>
                                        <li id="menu-item-1709" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1709"><a href="/statistics/">Key Statistics</a></li>
                                        <li id="menu-item-1499" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1499"><a href="/lending/lending-faq/">Lending FAQ</a></li>
                                        <li id="menu-item-1500" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1500"><a href="/lending/risks/">What are the risks?</a></li>
                                        <li id="menu-item-1653" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1653"><a rel="noopener noreferrer" target="_blank" href="/assets/borrowed_assets/TCA-Membership-Agreement-May16.pdf">Membership Agreement</a></li>
                                        <li id="menu-item-4088" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4088"><a href="/register/">Member Registration</a></li>
                                        <li id="menu-item-1740" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1740"><a href="/assets/borrowed_assets/2018/04/TCA-Member-Application-Form-April-2018.docx">Membership Application Form</a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-1501" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1501"><a href="/borrowing/">Borrowing</a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-1502" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1502"><a href="/borrowing/about-borrowing/">About Borrowing</a></li>
                                        <li id="menu-item-4085" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4085"><a href="/statistics/">Key Statistics</a></li>
                                        <li id="menu-item-1503" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1503"><a href="/borrowing/apply-loan/">Apply for a loan</a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-1504" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1504"><a href="/sponsors-introducers/">Sponsors</a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-1505" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1505"><a href="/sponsors-introducers/about-sponsors-introducers/">About Sponsors &#038; Introducers</a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-1411" className="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor current-menu-ancestor current-menu-parent current-page-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-1411"><a href="/about/">About us</a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-1414" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1314 current_page_item menu-item-1414"><a href="/about/thincats-australia/">About ThinCats</a></li>
                                        <li id="menu-item-1413" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1413"><a href="/about/our-team/">Our Team</a></li>
                                        <li id="menu-item-1412" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1412"><a href="/about/contact-us/">Contact us</a></li>
                                        <li id="menu-item-1655" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1655"><a rel="noopener noreferrer" target="_blank" href="/assets/borrowed_assets/TCA-Privacy-Policy-v1.1.pdf">Privacy Policy</a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-1660" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1660"><a href="/news/">News</a></li>
                                <li id="menu-item-1656" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1656"><a href="/resources/">Resources</a></li>
                            </ul>
                            <div id="nav-separator"></div>
                        </nav>

                        <div id="loginBox" className="loginBox" style={{display: "none"}}>
                            <div id="modal-container">
                                <div className="modal-content" id="loginContent">
                                    <h1 className="modal-title">Sign in<a href="#" className="closeBtn">X</a></h1>
                                    <div className="lwa lwa-default"><form className="lwa-form" action="/wp-login.php" method="post">
                                        <div>
                                            <span className="lwa-status"></span>
                                            <table>
                                                <tbody>
                                                    <tr className="lwa-username">
                                                        <td className="lwa-username-label">
                                                            <label>Username</label>
                                                        </td>
                                                        <td className="lwa-username-input">
                                                            <input type="text" name="log" />
                                                        </td>
                                                    </tr>
                                                    <tr className="lwa-password">
                                                        <td className="lwa-password-label">
                                                            <label>Password</label>
                                                        </td>
                                                        <td className="lwa-password-input">
                                                            <input type="password" name="pwd" />
                                                        </td>
                                                    </tr>
                                                    <tr><td colSpan="2"></td></tr>
                                                    <tr className="lwa-submit">
                                                        <td className="lwa-submit-button">
                                                            <input type="submit" name="wp-submit" id="lwa_wp-submit" value="Log In" tabIndex="100" />
                                                            <input type="hidden" name="lwa_profile_link" value="" />
                                                            <input type="hidden" name="login-with-ajax" value="login" />
                                                        </td>
                                                        <td className="lwa-submit-links">
                                                            <input name="rememberme" type="checkbox" className="lwa-rememberme" value="forever" /> <label>Remember Me</label>
                                                            <br />
                                                            <a className="lwa-links-remember" href="/wp-login.php?action=lostpassword" title="Password Lost and Found">Lost your password?</a>
                                                            <br />
                                                            <a href="/wp-signup.php" className="lwa-links-register lwa-links-modal"></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </form>
                                        <form className="lwa-remember" action="/wp-login.php?action=lostpassword" method="post" style={{display: "none"}}>
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
                                                            <input type="text" name="user_login" className="lwa-user-remember" value="Enter username or email" onFocus={() => { if (this.value == "Enter username or email") { this.value = "" } }} onBlur={() => { if (this.value == "") { this.value = "Enter username or email" } }} />
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
                                        <div className="lwa-register lwa-register-default lwa-modal" style={{display: "none"}}>
                                        <h4>Register For This Site</h4>
                                        <p><em className="lwa-register-tip">A password will be e-mailed to you.</em></p>
                                        <form className="lwa-register-form" action="/wp-signup.php" method="post">
                                            <div>
                                                <span className="lwa-status"></span>
                                                <p className="lwa-username">
                                                    <label>Username<br />
                                                        <input type="text" name="user_login" id="user_login" className="input" size="20" tabIndex="10" /></label>
                                                </p>
                                                <p className="lwa-email">
                                                    <label>E-mail<br />
                                                        <input type="text" name="user_email" id="user_email" className="input" size="25" tabIndex="20" /></label>
                                                </p>
                                                <div id="siwp_captcha_input_0">
                                                    <br />
                                                    <div style={{float: "left"}}><img id="siwp_captcha_image_0" src="/wp-content/plugins/securimage-wp/lib/siwp_captcha.php?id=2efce8cbdda8c5e60f5fe673315b91eee8e7fb24" alt="CAPTCHA Image" style={{verticalAlign: "middle"}} /></div>
                                                    <div style={{float: "left"}}><a tabIndex="-1" style={{borderStyle: "none"}} href="#" title="Refresh Image" ><img src="/wp-content/plugins/securimage-wp/lib/images/refresh.png" alt="Reload Image" onClick={() => this.blur()} style={{verticalAlign: "middle", height: "32px", width: "32px"}} align="bottom" /></a></div><div style={{clear: "both"}}></div>
                                                    <label htmlFor="siwp_captcha_value_0">Enter Code <span className="required">*</span></label>
                                                    <input type="hidden" id="input_siwp_captcha_id_0" name="scid" value="2efce8cbdda8c5e60f5fe673315b91eee8e7fb24" /><input id="siwp_captcha_value_0" name="siwp_captcha_value" size="10" maxLength="8" type="text" aria-required="true" />
                                                </div>
                                                <p className="submit">
                                                    <input type="submit" name="wp-submit" id="wp-submit" className="button-primary" value="" tabIndex="100" />
                                                </p>
                                                <input type="hidden" name="login-with-ajax" value="register" />
                                            </div>
                                        </form>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </section>
            </div>
        )
    }
}
