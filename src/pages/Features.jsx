import React from "react";
import Featurescss from "../styles/features.module.css";
import imag3 from "../assets/images/image3.png";

const Features = () =>{
    return (
       <>
        <div className={Featurescss.container3}>
            <div className={Featurescss.feature_wrapper}>
                <div className={Featurescss.feature_content}>
                    <div className={Featurescss.section__title}>
                        <h2>Tons of features</h2>

                    </div>
                    <img src={imag3} alt="" /> 
                </div>

            </div>
        </div>
       </>
    );
}

export default Features