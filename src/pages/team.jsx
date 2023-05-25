import React from "react";
import teamcss from "../styles/team.module.css";
import image1 from "../assets/images/Frame 32.png";
import image2 from "../assets/images/Frame 33.png";
import image3 from "../assets/images/Frame 34.png";
import image4 from "../assets/images/Frame 31.png";

const Team = () =>{
    return(
        <div className={teamcss.container6}>
            <div className={teamcss.team_wrapper}>
                <div className={teamcss.team_content}>
                    <div className={teamcss.section_title}>
                        <h2 className={teamcss.Title_section}>Our Team & Values</h2> <br />
                        <h4 className={teamcss.subsection}>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Maecenas dapibus odio at varius <br/>vestibulum. Nam sollicitudin justo sed nibh viverra,<br/> id consectetur lacus semper.</h4>
                    </div>
                    <div className={teamcss.image_grid}>
                        <div className={teamcss.image}>
                            <img src={image1} alt="" />
                        </div>
                        <div className={teamcss.image}>
                            <img src={image2} alt="" />
                        </div>
                        <div className={teamcss.image}>
                            <img src={image3} alt="" />
                        </div>
                        <div className={teamcss.image}>
                            <img src={image4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team