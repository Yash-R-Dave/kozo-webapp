import React from "react";
import { Link} from "react-router-dom";
import Nava from  '../styles/nav.module.css';
import logo from '../assets/images/logo.png'

const Navbar = () =>{
    return (
       <div className={Nava.container}>
            <nav className={Nava.navbar}>
                <div className={Nava.logo}>
                    <div className={Nava.logo_img}>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <ul className={Nava.nav_links}>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/features'><li>Features</li></Link>
                    <Link to='/integrations'><li>Integrations</li></Link>
                    <Link to='/clients'><li>Clients</li></Link>
                    <Link to='/testimonials'><li>Testimonials</li></Link>
                    <Link to='/contact' className={Nava.btn1}><li>Contact Us</li></Link>
                </ul>
            </nav>
       </div>
    );
}

export default Navbar