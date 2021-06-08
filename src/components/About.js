import React from "react";
import "./about.css"
import html_css from '../resources/html-css.svg';
import js from '../resources/js.svg';
import java from '../resources/java.svg';
import python from '../resources/python.svg';
import php from '../resources/php.svg';
import psql from '../resources/psql.svg';
import react from '../resources/react.svg';
import vue from '../resources/vue.svg';
import flask from '../resources/flask.svg';
import wp from '../resources/wp.svg';
import ps from '../resources/ps.svg';
import il from '../resources/il.svg';


function About() {

    return(
        <section id="about">
            <h2>
                About Me
            </h2>
            <div className="flex">
                <div className="about-content">
                    <p>I am an enthusiastic and dedicated Software Developer with excellent interpersonal and problem-solving skills as well as great analytic and planning ability. 
                        My collaborative mindset and passion for coding makes me a reliable and adaptable teammate, who is keen to step out of his comfort zone and constantly keep learning. 
                        I have a strong interest in innovative software engineering projects that require creativity, attention to detail, and both abstract and strategic thinking.
                    </p>
                </div>
                <div className="skill-set-container">
                    <div className="skill-set-header"><h3>Skill set</h3></div>
                    <div className="skill-set-content">
                        <ul className="skill-set-list">
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src={html_css} alt="HTML/CSS"/>
                                </div>
                                <div className="skill-set-detail">
                                    <div className="skill-set-title">
                                        <div className="skill-name">HTML / CSS</div>
                                        <div className="skill-procentage">90%</div>
                                    </div>
                                    <div className="skill-set-bar procent90"/>
                                </div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src={js} alt="JavaScript"/>
                                </div>
                                <div className="skill-set-detail">
                                    <div className="skill-set-title">
                                        <div className="skill-name">JavaScript</div>
                                        <div className="skill-procentage">70%</div>
                                    </div>
                                    <div className="skill-set-bar procent70"/>
                                </div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src={java} alt="Java"/>
                                </div>
                                <div className="skill-set-detail">
                                    <div className="skill-set-title">
                                        <div className="skill-name">Java</div>
                                        <div className="skill-procentage">70%</div>
                                    </div>
                                    <div className="skill-set-bar procent70"/>
                                </div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src={python} alt="Python"/>
                                </div>
                                <div className="skill-set-detail">
                                    <div className="skill-set-title">
                                        <div className="skill-name">Python</div>
                                        <div className="skill-procentage">70%</div>
                                    </div>
                                    <div className="skill-set-bar procent70"/>
                                </div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src={php} alt="PHP"/>
                                </div>
                                <div className="skill-set-detail">
                                    <div className="skill-set-title">
                                        <div className="skill-name">PHP</div>
                                        <div className="skill-procentage">60%</div>
                                    </div>
                                    <div className="skill-set-bar procent60"/>
                                </div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src={psql} alt="PSQL"/>
                                </div>
                                <div className="skill-set-detail">
                                    <div className="skill-set-title">
                                        <div className="skill-name">PostgreSQL</div>
                                        <div className="skill-procentage">60%</div>
                                    </div>
                                    <div className="skill-set-bar procent60"/>
                                </div>
                            </li>
                        </ul>
                        <ul className="skill-set-list">
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src={react} alt="React.js"/>
                                </div>
                                <div className="skill-set-detail">
                                    <div className="skill-set-title">
                                        <div className="skill-name">React.js</div>
                                        <div className="skill-procentage">70%</div>
                                    </div>
                                    <div className="skill-set-bar procent70"/>
                                </div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src={vue} alt="Vue.js"/>
                                </div>
                                <div className="skill-set-detail">
                                    <div className="skill-set-title">
                                        <div className="skill-name">Vue.js</div>
                                        <div className="skill-procentage">70%</div>
                                    </div>
                                    <div className="skill-set-bar procent70"/>
                                </div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src={flask} alt="Flask"/>
                                </div>
                                <div className="skill-set-detail">
                                    <div className="skill-set-title">
                                        <div className="skill-name">Flask</div>
                                        <div className="skill-procentage">60%</div>
                                    </div>
                                    <div className="skill-set-bar procent60"/>
                                </div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src={wp} alt="WordPress"/>
                                </div>
                                <div className="skill-set-detail">
                                    <div className="skill-set-title">
                                        <div className="skill-name">WordPress</div>
                                        <div className="skill-procentage">50%</div>
                                    </div>
                                    <div className="skill-set-bar procent50"/>
                                </div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src={ps} alt="Photoshop"/>
                                </div>
                                <div className="skill-set-detail">
                                    <div className="skill-set-title">
                                        <div className="skill-name">Photoshop</div>
                                        <div className="skill-procentage">50%</div>
                                    </div>
                                    <div className="skill-set-bar procent50"/>
                                </div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src={il} alt="Illustrator"/>
                                </div>
                                <div className="skill-set-detail">
                                    <div className="skill-set-title">
                                        <div className="skill-name">Illustrator</div>
                                        <div className="skill-procentage">50%</div>
                                    </div>
                                    <div className="skill-set-bar procent50"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;