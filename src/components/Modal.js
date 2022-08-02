import React from "react";
import './modal.css';
import ListOfProjects from "../content/ListOfProjects";

function Modal({ modal, close }) {

    
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
        const project = contentIndex(ListOfProjects);
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