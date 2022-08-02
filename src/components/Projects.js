import React from "react";
import './project.css';
import ProjectItem from "./ProjectItem";
import ListOfProjects from "../content/ListOfProjects";


function Projects() {

    
    const projectItem = (status) => (ListOfProjects
        .filter(el => status === true ? !el.finished : el.finished)
        .map((el, i) =>
            <ProjectItem
            project={el}
            key={i} />
        ))

    return(
        <section id="projects">
            <h2>My Projects</h2>
            <div className="container">
                <h4>In Progress</h4>
                <div className="container flex">
                    {projectItem(true)}
                </div>
                <h4>Finished</h4>
                <div className="container flex">
                    {projectItem(false)}
                </div>
            </div>
        </section>
    )
}

export default Projects;