import React from "react";
import testcss from "../styles/test.module.css";
import image1 from "../assets/images/image 3.png";
import image2 from "../assets/images/image 2.png";
import image3 from "../assets/images/image 1.png";

const Test = () =>{
    return (
       <div className={testcss.container7}>
            <div className={testcss.test_wrapper}>
                <div className={testcss.test_content}>
                    <div className={testcss.sectiontitle}>
                        <h2 className={testcss.Title_section}>Read Our Rave Reviews</h2>
                    </div> <br />
                    <div className={testcss.test_container}>
                        <div className={testcss.test1}>
                            <img src={image1} alt="" /> <br />
                            <span class="fa fa-star checked "></span> &nbsp;
                            <span class="fa fa-star checked"></span> &nbsp;
                            <span class="fa fa-star checked"></span> &nbsp;
                            <span class="fa fa-star checked"></span> &nbsp;
                            <span class="fa fa-star checked"></span> &nbsp;

                            <div className={testcss.test_text}>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Maecenas dapibus odio at varius<br/> vestibulum. Nam sollicitudin justo.</div>
                        </div>
                        <div className={testcss.test1}>
                            <img src={image2} alt="" /> <br />
                            <span class="fa fa-star checked"></span> &nbsp;
                            <span class="fa fa-star checked"></span> &nbsp;
                            <span class="fa fa-star checked"></span> &nbsp;
                            <span class="fa fa-star checked"></span> &nbsp;
                            <span class="fa fa-star checked"></span> &nbsp;

                            <div className={testcss.test_text}>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Maecenas dapibus odio at varius<br/> vestibulum. Nam sollicitudin justo.</div>
                        </div>
                        <div className={testcss.test1}>
                            <img src={image3} alt="" /><br />
                            <span class="fa fa-star checked"></span> &nbsp;
                            <span class="fa fa-star checked"></span> &nbsp;
                            <span class="fa fa-star checked"></span> &nbsp;
                            <span class="fa fa-star checked"></span> &nbsp;
                            <span class="fa fa-star checked"></span> &nbsp;

                            <div className={testcss.test_text}>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Maecenas dapibus odio at varius<br/> vestibulum. Nam sollicitudin justo.</div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default Test