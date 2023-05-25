import React from "react";
import Integrationcss from "../styles/Integrations.module.css";
import img3 from "../assets/images/Group 201.png";

const Integrations = () =>{
    return (
        <>
            <div className={Integrationcss.container5}>
                <div className={Integrationcss.integration_wrapper}>
                    <div className={Integrationcss.integration_content}>
                        <div className={Integrationcss.integration_image}>
                            <div className={Integrationcss.Integration_image_wrapper}>
                                <img src={img3} className={Integrationcss.image3} alt="" />
                            </div>
                        </div>
                        <div className={Integrationcss.section_title}>
                            <h4 className={Integrationcss.Title_1}>Tons of Integrations</h4> <br />
                            <h2 className={Integrationcss.title_2}>Integrate with Your <br /> Tools</h2>
                            <div className={Integrationcss.sub_section}>
                                <h4>Kozo’s API makes it possible to integrate with a huge number of <br />platforms. The tools you know and love can work perfectly <br/>alongside Kozo.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Integrations