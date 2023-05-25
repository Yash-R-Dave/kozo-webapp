import React from "react";
import Problemcss from "../styles/problem.module.css";
import im1 from "../assets/images/Group 1.png"

const Problem = () =>{
    return(
        <div className={Problemcss.container4}>
            <div className={Problemcss.problem_wrraper}>
                <div className={Problemcss.problem_content}>
                    <div className={Problemcss.title_section}>
                        <h2>Problems Solved by Kozo</h2>
                    </div>
                    <img src={im1} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Problem