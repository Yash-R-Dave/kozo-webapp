import React from "react";
import footercss from "../styles/footer.module.css";

const Footer = () =>{
    return(
        <div className={footercss.container8}>
            <div className={footercss.footer_wrapper}>
                <div className={footercss.footer_content}>
                    <h2 className={footercss.title_section}>
                        Ready to Simplify your Finances?
                    </h2> <br />
                    <div className={footercss.text}>
                        <h4 className={footercss.email_Section}>
                        <span class="fa fa-envelope"> &nbsp; hello@gokozo.com</span>
                        </h4>
                        <h4 className={footercss.phone_section}>
                        <span class="fa fa-phone"> &nbsp; 9123134092</span>
                        </h4>
                    </div>
                    <div className={footercss.footerend}>
                        <h5 className={footercss.kozo}>© Kozo 2022</h5>
                        <h5 className={footercss.privacy}>Privacy policy &nbsp; &nbsp; &nbsp; Terms & Conditions</h5>
                        <h5 className={footercss.Terms}></h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer