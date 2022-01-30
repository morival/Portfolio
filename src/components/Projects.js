import React, { useState } from "react";
// import Modal from './Modal';
// import { Transition } from 'react-transition-group';
import './project.css';
import project_01 from '../resources/project_01.jpg';
import project_02 from '../resources/project_02.jpg';
import project_03 from '../resources/project_03.jpg';
import project_04 from '../resources/project_04.jpg';


function Projects({ setModal }) {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    
    const projects = [{
        name: "Rickshaw Registry",
        tech: "React.js (JavaScript) / Express.js / MongoDB",
        setShow: setShow4,
        show: show4,
        img: project_04
    },{
        name: "Shop Local",
        tech: "React.js (JavaScript) / Express.js / Spring Boot (Java)",
        setShow: setShow3,
        show: show3,
        img: project_03
    },{
        name: "Cosmodex",
        tech: "Vue.js (JavaScript) / Express.js / MongoDB",
        setShow: setShow2,
        show: show2,
        img: project_02
    },{
        name: "My Destination",
        tech: "Flask (Python) / MySQL",
        setShow: setShow1,
        show: show1,
        img: project_01
    }]

    const inProgress = projects.slice(0, 1)
    const finished = projects.slice(1,4)

    const project = (col) => {
        return(
            col.map((item, index) => {
                return(
                    <div className="project-container" 
                    key={index}
                    onMouseEnter={() => item.setShow(true)}
                    onMouseLeave={() => item.setShow(false)}
                    >
                        {!item.show && <div className="project-img">
                            <img src={item.img} alt={item.name} />
                        </div>}
                        {item.show && <div className="project-info">
                            <h2>{item.name}</h2>
                            <h4>{item.tech}</h4>
                            <button className="btn-open-modal"
                            onClick={() => setModal(item.img)}>Show more</button>
                        </div>}
                    </div>
                )
            })
        )
    }

    return(
        <section id="projects">
            <h2>My Projects</h2>
            <div className="container">
                <h4>In Progress</h4>
                <div className="container flex">
                    {project(inProgress)}
                </div>
            </div>
            <div className="container">
                <h4>Finished</h4>
                <div className="container flex">
                    {project(finished)}
                </div>
            </div>
        </section>
    )
}

export default Projects;