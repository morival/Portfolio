import React, { useState } from "react";
// import Modal from './Modal';
// import { Transition } from 'react-transition-group';
import './project.css';
import project_01 from '../resources/project_01.jpg';
import project_02 from '../resources/project_02.jpg';
import project_03 from '../resources/project_03.jpg';


function Projects({ setShowModal }) {

    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    

    return(
        <section id="projects">
            <h2>Projects</h2>
            <div className="container flex">
                <div className="project-container" 
                onMouseEnter={() => setIsShown1(true)}
                onMouseLeave={() => setIsShown1(false)}>
                    {!isShown1 && <div className="project-img">
                        <img src={project_01} alt="project-1" />
                    </div>}
                    {isShown1 && <div className="project-info">
                        <h2>My Destination</h2>
                        <h3>Python/Flask</h3>
                        <button className="btn-open-modal"
                        onClick={() => setShowModal(project_01)}>Show more</button>
                    </div>}
                    
                </div>
                <div className="project-container" 
                onMouseEnter={() => setIsShown2(true)}
                onMouseLeave={() => setIsShown2(false)}>
                    {!isShown2 && <div className="project-img">
                        <img src={project_02} alt="project-2" />
                    </div>}
                    {isShown2 && <div className="project-info">
                        <h2>Cosmodex</h2>
                        <h3>Vue.js/MongoDB</h3>
                        <button className="btn-open-modal"
                        onClick={() => setShowModal(project_02)}>Show more</button>
                    </div>}
                </div>
                <div className="project-container"
                onMouseEnter={() => setIsShown3(true)}
                onMouseLeave={() => setIsShown3(false)}>
                    {!isShown3 && <div className="project-img">
                        <img src={project_03} alt="project-3" />
                    </div>}
                    {isShown3 && <div className="project-info">
                        <h2>Shop Local</h2>
                        <h3>React.js/Spring Data REST</h3>
                        <button className="btn-open-modal"
                        onClick={() => setShowModal(project_03)}>Show more</button>
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default Projects;