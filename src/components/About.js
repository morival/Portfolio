import React from "react";
import "./about.css"

function About() {

    return(
        <section id="about">
            <h2>
                About Me
            </h2>
            <div className="flex">
                <div>
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
                                    <img src="" alt="HTML/CSS"/>
                                </div>
                                <div className="skill-set-detail"></div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src="" alt="JavaScript"/>
                                </div>
                                <div className="skill-set-detail"></div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src="" alt="Java"/>
                                </div>
                                <div className="skill-set-detail"></div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src="" alt="Python"/>
                                </div>
                                <div className="skill-set-detail"></div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src="" alt="PHP"/>
                                </div>
                                <div className="skill-set-detail"></div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src="" alt="SQL"/>
                                </div>
                                <div className="skill-set-detail"></div>
                            </li>
                        </ul>
                        <ul className="skill-set-list">
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src="" alt="React.js"/>
                                </div>
                                <div className="skill-set-detail"></div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src="" alt="Vue.js"/>
                                </div>
                                <div className="skill-set-detail"></div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src="" alt="Flask"/>
                                </div>
                                <div className="skill-set-detail"></div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src="" alt="WordPress"/>
                                </div>
                                <div className="skill-set-detail"></div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src="" alt="Photoshop"/>
                                </div>
                                <div className="skill-set-detail"></div>
                            </li>
                            <li className="skill-set-item">
                                <div className="skill-set-icon">
                                    <img src="" alt="Illustrator"/>
                                </div>
                                <div className="skill-set-detail"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;