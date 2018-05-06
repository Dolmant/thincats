// @flow
import {connect} from 'react-redux';
import React from 'react';
import './header.less';

type Props = {
};

export class Header extends React.Component<Props> {
    render() {
        //        <body  class="page-template-default page page-id-1314 page-child parent-pageid-1312"  class="">
        return (
            <div className="header">
                <section className="page-wrap">
                    <header data-role="page-header" className="clearfix">
                        <div className="buttons clearfix">
                            <a href="/register"  className="btn-reg"><span></span>register</a>
                            <a onclick="$('#overlay').css('display','block');$('#loginBox').css('display','block');" title="Login" href="#" className="btn-log"><span></span>Log in</a>
                            </div>
                            <a href="https://www.thincats.com.au" className="logo"></a>
                            <nav className="main-navigation clearfix">
                                <h3> Main Menu </h3>
                                <span className="menu"></span>
                                <ul className="sf-menu">
                                    <li id="menu-item-1166" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1166"><a href="/">Header</a></li>
                                    <li id="menu-item-1661" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1661"><a href="https://www.thincats.com.au/how-thincats-works/">How it works</a></li>
                                    <li id="menu-item-1497" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1497"><a href="https://www.thincats.com.au/lending/">Lending</a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-1498" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1498"><a href="https://www.thincats.com.au/lending/about-lending/">About Lending</a></li>
                                        <li id="menu-item-1709" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1709"><a href="https://www.thincats.com.au/statistics/">Key Statistics</a></li>
                                        <li id="menu-item-1499" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1499"><a href="https://www.thincats.com.au/lending/lending-faq/">Lending FAQ</a></li>
                                        <li id="menu-item-1500" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1500"><a href="https://www.thincats.com.au/lending/risks/">What are the risks?</a></li>
                                        <li id="menu-item-1653" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1653"><a target="_blank" href="/wp-content/uploads/2014/10/TCA-Membership-Agreement-May16.pdf">Membership Agreement</a></li>
                                        <li id="menu-item-4088" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4088"><a href="https://www.thincats.com.au/register/">Member Registration</a></li>
                                        <li id="menu-item-1740" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1740"><a href="https://www.thincats.com.au/wp-content/uploads/2018/04/TCA-Member-Application-Form-April-2018.docx">Membership Application Form</a></li>
                                    </ul>
                                    </li>
                                    <li id="menu-item-1501" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1501"><a href="https://www.thincats.com.au/borrowing/">Borrowing</a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-1502" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1502"><a href="https://www.thincats.com.au/borrowing/about-borrowing/">About Borrowing</a></li>
                                        <li id="menu-item-4085" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4085"><a href="https://www.thincats.com.au/statistics/">Key Statistics</a></li>
                                        <li id="menu-item-1503" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1503"><a href="https://www.thincats.com.au/borrowing/apply-loan/">Apply for a loan</a></li>
                                    </ul>
                                    </li>
                                    <li id="menu-item-1504" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1504"><a href="https://www.thincats.com.au/sponsors-introducers/">Sponsors</a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-1505" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1505"><a href="https://www.thincats.com.au/sponsors-introducers/about-sponsors-introducers/">About Sponsors &#038; Introducers</a></li>
                                    </ul>
                                    </li>
                                    <li id="menu-item-1411" className="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor current-menu-ancestor current-menu-parent current-page-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-1411"><a href="https://www.thincats.com.au/about/">About us</a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-1414" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1314 current_page_item menu-item-1414"><a href="https://www.thincats.com.au/about/thincats-australia/">About ThinCats</a></li>
                                        <li id="menu-item-1413" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1413"><a href="https://www.thincats.com.au/about/our-team/">Our Team</a></li>
                                        <li id="menu-item-1412" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1412"><a href="https://www.thincats.com.au/about/contact-us/">Contact us</a></li>
                                        <li id="menu-item-1655" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1655"><a target="_blank" href="/wp-content/uploads/2014/10/TCA-Privacy-Policy-v1.1.pdf">Privacy Policy</a></li>
                                    </ul>
                                    </li>
                                    <li id="menu-item-1660" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1660"><a href="https://www.thincats.com.au/news/">News</a></li>
                                    <li id="menu-item-1656" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1656"><a href="https://www.thincats.com.au/resources/">Resources</a></li>
                            </ul>
                            <div id="nav-separator"></div>
                        </nav>

                        <div id="loginBox" className="loginBox" style="display: none;">
                            <div id="modal-container">
                                <div className="modal-content" id="loginContent">
                                    <h1 className="modal-title">Sign in<a href="#" className="closeBtn" onclick="$('#loginBox').css('display','none');$('#overlay').css('display','none');">X</a></h1>
                                    <div className="lwa lwa-default">        <form className="lwa-form" action="https://www.thincats.com.au/wp-login.php" method="post">
                                        <div>
                                            <span className="lwa-status"></span>
                                            <table>
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
                                                <tr><td colspan="2"></td></tr>
                                                <tr className="lwa-submit">
                                                    <td className="lwa-submit-button">
                                                        <input type="submit" name="wp-submit" id="lwa_wp-submit" value="Log In" tabindex="100" />
                                                        <input type="hidden" name="lwa_profile_link" value="" />
                                                        <input type="hidden" name="login-with-ajax" value="login" />
                                                    </td>
                                                    <td className="lwa-submit-links">
                                                        <input name="rememberme" type="checkbox" className="lwa-rememberme" value="forever" /> <label>Remember Me</label>
                                                        <br />
                                                        <a className="lwa-links-remember" href="https://www.thincats.com.au/wp-login.php?action=lostpassword" title="Password Lost and Found">Lost your password?</a>
                                                        <br />
                                                        <a href="https://www.thincats.com.au/wp-signup.php" className="lwa-links-register lwa-links-modal"></a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </form>
                                    <form className="lwa-remember" action="https://www.thincats.com.au/wp-login.php?action=lostpassword" method="post" style="display:none;">
                                        <div>
                                            <span className="lwa-status"></span>
                                            <table>
                                                <tr>
                                                    <td>
                                                        <strong>Forgotten Password</strong>         
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="lwa-remember-email">  
                                                            <input type="text" name="user_login" className="lwa-user-remember" value="Enter username or email" onfocus="if(this.value == 'Enter username or email'){this.value = '';}" onblur="if(this.value == ''){this.value = 'Enter username or email'}" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="lwa-remember-buttons">
                                                            <input type="submit" value="Get New Password" className="lwa-button-remember" />
                                                            <a href="#" className="lwa-links-remember-cancel">Cancel</a>
                                                            <input type="hidden" name="login-with-ajax" value="remember" />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </form>
                                        <div className="lwa-register lwa-register-default lwa-modal" style="display:none;">
                                            <h4>Register For This Site</h4>
                                            <p><em className="lwa-register-tip">A password will be e-mailed to you.</em></p>
                                            <form className="lwa-register-form" action="https://www.thincats.com.au/wp-signup.php" method="post">
                                                <div>
                                                    <span className="lwa-status"></span>
                                                    <p className="lwa-username">
                                                        <label>Username<br />
                                                        <input type="text" name="user_login" id="user_login" className="input" size="20" tabindex="10" /></label>
                                                    </p>
                                                    <p className="lwa-email">
                                                        <label>E-mail<br />
                                                        <input type="text" name="user_email" id="user_email" className="input" size="25" tabindex="20" /></label>
                                                    </p>
                                                    <div id="siwp_captcha_input_0">
                                                        <script type="text/javascript">
                                                            function siwp_refresh(id, audioObj) {
                                                                var cid = siwp_genid();
                                                                document.getElementById('input_siwp_captcha_id_' + id).value = cid;
                                                                document.getElementById('siwp_captcha_image_' + id).src = 'https://www.thincats.com.au/wp-content/plugins/securimage-wp/lib/siwp_captcha.php?id=' + cid;
                                                                if (null !== audioObj) {
                                                                    audioObj.refresh(cid);
                                                                }
                                                            
                                                            }
                                                            function siwp_genid() {
                                                                var cid = '', chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
                                                                for (var c = 0; c < 40; ++c) { cid += chars.charAt(Math.floor(Math.random() * chars.length)); }
                                                                return cid;
                                                            };
                                                        </script>
                                                        <script type="text/javascript">var siwp_interval = setInterval(function() { siwp_refresh('0', null); }, 900000);</script><br />
                                                        <div style="float: left"><img id="siwp_captcha_image_0" src="https://www.thincats.com.au/wp-content/plugins/securimage-wp/lib/siwp_captcha.php?id=2efce8cbdda8c5e60f5fe673315b91eee8e7fb24" alt="CAPTCHA Image" style="vertical-align: middle;" /></div>
                                                        <div style="float: left"><a tabindex="-1" style="border-style: none;" href="#" title="Refresh Image" onclick="siwp_refresh('0', null); this.blur(); return false"><img src="https://www.thincats.com.au/wp-content/plugins/securimage-wp/lib/images/refresh.png" alt="Reload Image" onclick="this.blur()" style="vertical-align: middle; height: 32px; width: 32px" align="bottom" /></a></div><div style="clear: both;"></div>
                                                        <label for="siwp_captcha_value_0">Enter Code <span className="required">*</span></label>
                                                        <input type="hidden" id="input_siwp_captcha_id_0" name="scid" value="2efce8cbdda8c5e60f5fe673315b91eee8e7fb24" /><input id="siwp_captcha_value_0" name="siwp_captcha_value" size="10" maxlength="8" type="text" aria-required="true" />
                                                    </div>
                                                    <p className="submit">
                                                        <input type="submit" name="wp-submit" id="wp-submit" className="button-primary" value="" tabindex="100" />
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
)(Header);
