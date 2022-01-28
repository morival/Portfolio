import React, { useState } from "react";
// import Modal from './Modal';
// import { Transition } from 'react-transition-group';
import './project.css';
import project_01 from '../resources/project_01.jpg';
import project_02 from '../resources/project_02.jpg';
import project_03 from '../resources/project_03.jpg';
import project_04 from '../resources/project_04.jpg';


function Projects({ setModal }) {

    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    

    return(
        <section id="projects">
            <h2>My Projects</h2>
            <div className="container">
                <h4>In Progress</h4>
                <div className="container flex">
                    <div className="project-container"
                    onMouseEnter={() => setIsShown4(true)}
                    onMouseLeave={() => setIsShown4(false)}
                    >
                        {!isShown4 && <div className="project-img">
                            <img src={project_04} alt="project-4" />
                        </div>}
                        {isShown4 && <div className="project-info">
                            <h2>Rickshaw Registry</h2>
                            <h4>React.js (JavaScript) / Express.js / MongoDB</h4>
                            <button className="btn-open-modal"
                            onClick={() => setModal(project_04)}>Show more</button>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="container">
                <h4>Finished</h4>
                <div className="container flex">
                    <div className="project-container" 
                    onMouseEnter={() => setIsShown1(true)}
                    onMouseLeave={() => setIsShown1(false)}
                    >
                        {!isShown1 && <div className="project-img">
                            <img src={project_01} alt="project-1" />
                        </div>}
                        {isShown1 && <div className="project-info">
                            <h2>My Destination</h2>
                            <h4>Flask (Python) / MySQL</h4>
                            <button className="btn-open-modal"
                            onClick={() => setModal(project_01)}>Show more</button>
                        </div>}
                    </div>
                    <div className="project-container" 
                    onMouseEnter={() => setIsShown2(true)}
                    onMouseLeave={() => setIsShown2(false)}
                    >
                        {!isShown2 && <div className="project-img">
                            <img src={project_02} alt="project-2" />
                        </div>}
                        {isShown2 && <div className="project-info">
                            <h2>Cosmodex</h2>
                            <h4>Vue.js (JavaScript) / Express.js / MongoDB</h4>
                            <button className="btn-open-modal"
                            onClick={() => setModal(project_02)}>Show more</button>
                        </div>}
                    </div>
                    <div className="project-container"
                    onMouseEnter={() => setIsShown3(true)}
                    onMouseLeave={() => setIsShown3(false)}
                    >
                        {!isShown3 && <div className="project-img">
                            <img src={project_03} alt="project-3" />
                        </div>}
                        {isShown3 && <div className="project-info">
                            <h2>Shop Local</h2>
                            <h4>React.js (JavaScript) / Express.js / Spring Boot (Java)</h4>
                            <button className="btn-open-modal"
                            onClick={() => setModal(project_03)}>Show more</button>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;