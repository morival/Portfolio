import React from "react";
import './modal.css';

function Modal({ modal, close }) {

    const projects = [{
        modalLabel: "My Destination",
        modalHeader: "Python/Flask project",
        modalContent: "A full stack web application with CRUD functions created using Python.The app enables users to plan, track and manage travel adventures. Built over 5 days using Flask framework and SQL for the backend database.",
        gitHub: "https://github.com/morival/W04_project_TBL"
    },
    {
        modalLabel: "Cosmodex",
        modalHeader: "JavaScript/MongoDB project",
        modalContent: "An educational application built using the Vue.js framework. Designed with schoolchildren in mind, it educates the user about the Solar System in a fun and interactive way. The app renders components dynamically based on JSON format data fetched from external APIs and a MongoDB server.",
        website: "https://morival.github.io/",
        gitHub: "https://github.com/morival/morival.github.io"
    },
    {
        modalLabel: "Shop Local",
        modalHeader: "Java/JavaScript project",
        modalContent: "An e-commerce application that provides commercial clients with a platform to promote their businesses and enables individual customers to find and book services available in their local area. The application is built with responsive components and laid out using the React framework. Backend written using Spring Data REST in Java.",
        gitHub:"https://github.com/morival/final_project_frontend"
    }];
    
    // Find index position of the Project from file number.
    const findProjectIndex = (modal) => {
            const findProjectNo = parseInt(modal.match(/\d+/)[0],10);
            const projectIndex = findProjectNo-1;
            return projectIndex;
    };
    // Return project element from projects array
    const findProject = (modal) => {
        const contentIndex = (content) => {
            return content[findProjectIndex(modal)];
        };
        const project = contentIndex(projects);
        return project;
    };
    // Select Label of the project
    const modalLabel = (modal) => {
        const label = findProject(modal).modalLabel;
        return label;
    };
    // Select Header of the project
    const modalHeader = (modal) => {
        const header = findProject(modal).modalHeader;
        return header;
    };
    // Select Content of the project
    const modalContent = (modal) => {
        const content = findProject(modal).modalContent;
        return content;
    };
    // Select Website Link of the project
    const website = (modal) => {
        const web = findProject(modal).website;
        return web;
    };
    // Select GitHub Repo Link of the project
    const gitHub = (modal) => {
        const github = findProject(modal).gitHub;
        return github;
    };

    return(
        <div className="modal-wrapper"
        style={{
            transform: modal ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: modal ? '1' : '0'
        }}>
            <div className="modal-header">
                <h3>{modalLabel(modal)}</h3>
                <span className="close-modal-btn"
                onClick={close}>X</span>
            </div>
            <div className="modal-image">
                <img src={modal} alt=""/>
            </div>
            <div className="modal-content">
                <div className="modal-body flex">
                    <h4>{modalHeader(modal)}</h4>
                    <p>{modalContent(modal)}</p>
                    <div className="modal-links">
                        {website(modal)
                            ? <button className="btn btn-links"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href=`${website(modal)}`;
                            }}>Visit website</button>
                            : null
                        }
                        {gitHub(modal) 
                            ?<button className="btn btn-links" 
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href=`${gitHub(modal)}`;
                            }}>Show the code on GitHub</button>
                            : null
                        }
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-cancel"
                    onClick={close}>Close</button>
                </div>
            </div>
        </div>
    )
};

export default Modal;