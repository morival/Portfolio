import React from "react";
import {Link} from 'react-scroll';
import './nav.css';

function Nav() {

    return(
        <section id="nav">
            <div className="section-link"><Link activeClass="active" to="about" spy={true} smooth={true}>About</Link></div>
            <div className="section-link"><Link to="projects" spy={true} smooth={true}>Projects</Link></div>
            <div className="section-link"><Link to="contact" spy={true} smooth={true}>Contact</Link></div>
        
        </section>
    )
}

export default Nav;