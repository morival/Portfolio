import React from "react";
import './modal.css';
import project_01 from '../resources/project_01.jpg';
import project_02 from '../resources/project_02.jpg';
import project_03 from '../resources/project_03.jpg';

function Modal({ showModal, close }) {

const modalLabel = (showModal) => {
    if (showModal === project_01) {
        return "My Destination"
    } else if (showModal === project_02) {
        return "Cosmodex"
    } else if (showModal === project_03) {
        return "Shop Local"
    } else {
        return "something went wrong..."
    }
}

const modalHeader = (showModal) => {
    if (showModal === project_01) {
        return "Travel Planner/Tracker | Solo Project"
    } else if (showModal === project_02) {
        return "Educational App | Group Project"
    } else if (showModal === project_03) {
        return "eCommerce App | Group Project"
    } else {
        return "something went wrong..."
    }
}

const modalContent = (showModal) => {
    if (showModal === project_01) {
        return "A full stack web application with CRUD functions created using Python.The app enables users to plan, track and manage travel adventures. Built over 5 days using Flask framework and SQL for the backend database."
    } else if (showModal === project_02) {
        return "An educational application built using the Vue.js framework. Designed with schoolchildren in mind, it educates the user about the Solar System in a fun and interactive way. The app renders components dynamically based on JSON format data fetched from external APIs and a MongoDB server."
    } else if (showModal === project_03) {
        return "An e-commerce application that provides commercial clients with a platform to promote their businesses and enables individual customers to find and book services available in their local area. The application is built with responsive components and laid out using the React framework. Backend written using Spring Data REST in Java."
    } else {
        return "something went wrong..."
    }
}

const github = (showModal) => {
    if (showModal === project_01) {
        return "https://github.com/morival/W04_project_TBL"
    } else if (showModal === project_02) {
        return "https://github.com/morival/the-curly-boys-space-adventure"
    } else if (showModal === project_03) {
        return "https://github.com/morival/final_project_frontend"
    } else {
        return "something went wrong..."
    }
}

    return(
        <div className="modal-wrapper"
        style={{
            transform: showModal ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: showModal ? '1' : '0'
        }}>
            <div className="modal-header">
                <h3>{modalLabel(showModal)}</h3>
                <span className="close-modal-btn"
                onClick={close}>x</span>
            </div>
            <div className="modal-image">
                <img src={showModal} alt=""/>
            </div>
            <div className="modal-content">
                <div className="modal-body flex">
                    <h4>{modalHeader(showModal)}</h4>
                    <p>{modalContent(showModal)}</p>
                    <button className="btn btn-github" 
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href=`${github(showModal)}`;
                    }}>Show the code on GitHub</button>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-cancel"
                    onClick={close}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;