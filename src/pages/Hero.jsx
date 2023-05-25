import React from "react";
import Herocss from '../styles/hero.module.css';
import Heroimg from '../assets/images/Heroimg.png';

const Hero = () =>{
    return (
        <>
          <div className={Herocss.container1}>
            <div className={Herocss.hero_wrapper}>
              <div className={Herocss.hero_content}>
                  <h2 className={Herocss.section_title}>The Quicker, Better, <br></br>Smarter Expense <br /> Management Tool</h2>
                  <h3 className={Herocss.section_subtitle}>Is your business caught in the red-tape of endless paper trails,<br /> the rigmarole of stuck approvals, faulty financial data entry <br /> and hours of number crunching? We’ve got you covered.</h3>
              </div>
              <div className={Herocss.hero_image}>
                  <div className={Herocss.hero_img_wrapper}>
                    <img src={Heroimg} alt="" />
                  </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default Hero