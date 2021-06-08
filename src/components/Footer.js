import React from "react";
import {Link} from 'react-scroll';
import { FaAngleDoubleUp, FaLinkedin, FaGithub } from 'react-icons/fa';
import './footer.css';

function Footer() {

    return(
        <section id="footer">
            <div className="footer-container flex">
                <Link to="home" spy={true} smooth={true}>
                    <div className="icon arrow-up">
                        <FaAngleDoubleUp/>
                    </div>
                </Link>
                <div className="icon-wrap flex row">
                    <div className="icon-container">
                        <a href="https://www.linkedin.com/in/mateusz-harlos/">
                            <div className="flex icon">
                                <FaLinkedin/>
                            </div>
                        </a>
                    </div>
                    <div className="icon-container">
                        <a href="https://github.com/morival">
                            <div className="flex icon">
                                <FaGithub/>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="footnote">
                    <p>MATT HARLOS <span className="highlight">©2021</span></p>
                </div>
            </div>
        </section>
    )
}

export default Footer;