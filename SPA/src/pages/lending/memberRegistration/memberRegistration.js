// @flow
import React from "react"
import "./memberRegistration.less"

type Props = {
};

export default class MemberRegistration extends React.Component<Props> {
    render() {
        return (
            <div className="memberRegistration">
                <section className="page-title clearfix">
                    <h1>Member Registration</h1>
                </section>
                <section className="regular-page-content clearfix">
                    <h3><strong>ThinCats Australia is open to wholesale investors only. </strong></h3>
                    <p>Under Australian Corporations Act and Regulations, a wholesale investor is required to have:</p>
                    <p>1) aggregate net assets of at least $2.5 million; or</p>
                    <p>2) aggregate gross income for each of the last two financial years of at least $250,000 a year.</p>
                    <p style={{textAlign: "left"}}>To register as a member please read our&nbsp;
                        <a href="/assets/borrowed_assets/TCA-Membership-Agreement-May16.pdf" rel="noopener noreferrer" target="_blank">terms and conditions</a>&nbsp;and complete the form below.</p>
                    <p style={{textAlign: "left"}}>Registration is currently free and allows you to review the current loans on the platform. There is no obligation to bid.</p>
                    <form method="post" id="um_form_register" className="um_user_form  um_generated_form" encType="multipart/form-data">
                        <div className="um_field_container">
                            <label id="um_field_1_register_label" className="um_label_top" htmlFor="um_field_1_register">Username</label>
                            <input type="text" name="user_login" id="um_field_1_register" className="um_field_1 um_input validate[required]" /></div>
                        <div className="um_field_container">
                            <label id="um_field_32_register_label" className="um_label_top" htmlFor="um_field_32_register">Password</label>
                            <input type="password" name="user_pass" id="um_field_32_register" className="um_field_32 um_input validate[required]" />
                            <span className="password_strength">
                            </span><p><label id="um_field_32_register_label_retype" className="um_label_top" htmlFor="um_field_32_register_retype">Retype Password</label>
                                <input type="password" name="user_pass_retype" id="um_field_32_register_retype" className="um_field_32 um_input validate[required,equals[um_field_32_register]]" /></p></div>
                        <div className="um_field_container">
                            <label id="um_field_3_register_label" className="um_label_top" htmlFor="um_field_3_register">First Name</label>
                            <input type="text" name="first_name" id="um_field_3_register" className="um_field_3 um_input validate[required]" />
                        </div><div className="um_field_container">
                            <label id="um_field_4_register_label" className="um_label_top" htmlFor="um_field_4_register">Last Name</label>
                            <input type="text" name="last_name" id="um_field_4_register" className="um_field_4 um_input validate[required]" />
                        </div><div className="um_field_container">
                            <label id="um_field_2_register_label" className="um_label_top" htmlFor="um_field_2_register">Email</label>
                            <input type="email" name="user_email" id="um_field_2_register" className="um_field_2 um_input validate[required,custom[email]]" />
                            <p>
                                <label id="um_field_2_register_label_retype" className="um_label_top" htmlFor="um_field_2_register_retype">Retype Email</label>
                                <input type="email" name="user_email_retype" id="um_field_2_register_retype" className="um_field_2 um_input validate[required,custom[email],equals[um_field_2_register]]" /></p></div>
                        <div className="um_field_container">
                            <label id="um_field_21_register_label" className="um_label_top" htmlFor="um_field_21_register">Telephone Number</label>
                            <input type="text" name="phone_number" id="um_field_21_register" className="um_field_21 um_input validate[custom[phone],required]" />
                        </div><div className="um_field_container">
                            <label id="um_field_5_register_label" className="um_label_top" htmlFor="um_field_5_register">Alias</label>
                            <input type="text" name="display_name" id="um_field_5_register" className="um_field_5 um_input validate[required]" />
                            <p id="um_field_5_register_description" className="um_description">Alias is your assumed name to keep your identity confidential in auctions and on the forum.</p>
                        </div><div className="um_field_container">
                            <label id="um_field_30_register_label" className="um_hidden" htmlFor="um_field_30_register">Role (investor)</label>
                            <input type="hidden" name="role" value="lender" id="um_field_30_register" className="um_field_30 um_input" />
                            <input type="hidden" name="role_field_id" value="30" />
                        </div>
                        <div className="um_field_container">
                            <label id="um_field_10_register_label" className="um_label_top" htmlFor="um_field_10_register">Please accept all terms and conditions</label><label>
                                <input type="checkbox" value="yes" name="terms[]" id="um_field_10_register_1" className="um_field_10 um_input validate[minCheckbox[1]]" /> I have read and accept all terms and conditions.</label><p id="um_field_10_register_description" className="um_description">By using this website you are agreeing to our
                                <a href="/assets/borrowed_assets/TCA-Membership-Agreement-May16.pdf" rel="noopener noreferrer" target="_blank">terms and conditions</a>.</p>
                        </div>
                        <div className="um_field_container">
                            <label id="um_field_44_register_label" className="um_hidden" htmlFor="um_field_44_register">Registration instructions</label><textarea name="registration_instructions" readOnly="readonly" id="um_field_44_register" className="um_field_44 um_input" style={{width: "0px"}}>
                            </textarea><p id="um_field_44_register_description" className="um_description">
                            </p>
                            <p>After completing this form you will receive an email with a verification link to confirm your email address, following which you will be able view loans currently being auctioned on the platform.</p>
                            <br /><p>
                            </p>
                        </div>
                        <div className="um_field_container">
                            <label id="um_field_33_register_label" className="pf_label" htmlFor="um_field_33_register"></label>
                            <input type="hidden" name="_status" value="non-verified" id="um_field_33_register" className="um_field_33 um_input" /></div>
                        <div className="um_clear">
                        </div>
                        <input type="hidden" name="form_key" value="register" />
                        <input type="hidden" name="action_type" value="registration" />
                        <input type="hidden" name="user_id" value="0" /><input type="hidden" name="pf_nonce" value="1e1f766a70" />
                        <input type="hidden" name="_wp_http_referer" value="/register/" /><input type="hidden" name="method_name" value="InsertUser" />
                        <input type="hidden" name="CSRFtoken" value="9c152e858d" /><input type="hidden" name="pf_http_referer" value="/news/" />
                        <div id="siwp_captcha_container_1">
                            <br />
                            <div style={{float: "left"}}><img id="siwp_captcha_image_1" src="/wp-content/plugins/securimage-wp/lib/siwp_captcha.php?id=de1e43c59264d4065ac7c8bb5294afb3788f8508" alt="CAPTCHA Image" style={{verticalAlign: "middle"}} /></div>
                            <div style={{float: "left"}}><a tabIndex="-1" style={{borderStyle: "none"}} href="#" title="Refresh Image" onClick="siwp_refresh('1', null); this.blur(); return false"><img src="/wp-content/plugins/securimage-wp/lib/images/refresh.png" alt="Reload Image" onClick="this.blur()" style={{verticalAlign: "middle", height: "32px", width: "32px"}} align="bottom" /></a></div><div style={{clear: "both"}}></div>
                            <label htmlFor="siwp_captcha_value_1">Enter Code <span className="required">*</span></label>
                            <input type="hidden" id="input_siwp_captcha_id_1" name="scid" value="de1e43c59264d4065ac7c8bb5294afb3788f8508" /><input id="siwp_captcha_value_1" name="siwp_captcha_value" size="10" maxLength="8" type="text" aria-required="true" />
                        </div>
                        <input type="submit" name="um_submit_button" value="Register" id="insert_user" className="um_button" /></form>
                </section>
            </div>
        )
    }
}
