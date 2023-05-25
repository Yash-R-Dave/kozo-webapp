import React from "react";
import image1 from "../assets/images/aboutimg.png";
import image2 from "../assets/images/Group3.png"
import Aboutcss from  "../styles/about.module.css";
import { Checkmark } from "react-checkmark";

const About = () =>{
    return (
        <>
            <div className={Aboutcss.container2}>
                <div className={Aboutcss.about_wrapper}>
                    <div className={Aboutcss.about_content}>
                        <div className={Aboutcss.aboutimage}>
                            <div className={Aboutcss.about_image_wrapper}>
                                <img className={Aboutcss.image1} src={image1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={Aboutcss.section_title}>
                                <h2>Simplified Expense <br />Management</h2>
                                <h3 className={Aboutcss.subsection_title}>Kozo is an expense tracking app that will untangle all your financial woes <br />and empower you to be your own accountant. Moreover, at Kozo, we are <br />industry agnostic. This means that we welcome anyone from any industry to <br />use this expense management solution. We have designed it so that Kozo <br />an fit into any business model.<br/>
                                <h3 className={Aboutcss.subsection_points}> 
                                    <span><Checkmark size={'16'} color={'#4716BA'} /></span>
                                    <p className={Aboutcss.paragraph}>Streamline your budgeting, expenses and billing all on one platform.</p>
                                </h3>
                                </h3>
                                <h3 className={Aboutcss.subsection_points1}> 
                                    <span><Checkmark size={'16'} color={'#4716BA'} /></span>
                                    <p className={Aboutcss.paragraph}>The dashboard can be customized and it’s hosted on a secure cloud.</p>
                                    </h3> <br />
                                    <h3 className={Aboutcss.subsection_points2}> 
                                    <span><Checkmark size={'16'} color={'#4716BA'} /></span>
                                    <p className={Aboutcss.paragraph}>Start now and experience hassle-free finance management.</p>
                                    </h3>
                    </div>
                    <div className={Aboutcss.aboutkozo}>
                        <h2>What is Kozo?</h2>
                    </div><br />
                    <div className={Aboutcss.aboutkozo_image}>
                        <img className={image2} src={image2} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About