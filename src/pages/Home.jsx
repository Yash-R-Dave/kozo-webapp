import React from "react";
import Navbar from "../pages/nav";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Homecss from "../styles/home.module.css"
import Features from "../pages/Features";
import Problem from "../pages/problem";
import Integrations from "./integrations";
import Team from "./team";
import Test from "./Text";
import Footer from "./footer";


const Home = () =>{
    return(
        <div className={Homecss.web}>
           <Hero />
           <About />
           <Features/>
           <Problem/>
           <Integrations/>
           <Team/>
           <Test/>
           <Footer/>
        </div>
    );
}

export default Home;