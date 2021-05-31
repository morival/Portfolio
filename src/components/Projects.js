import React from "react";

function Projects() {

    return(
        <section id="projects flex">
            <h2>Projects</h2>
            <div className="container flex">
                <div className="project-container flex">
                    <div className="project-img"></div>
                    <h3>My Destination | Travel Planner/Tracker | Solo Project</h3>
                    <p>
                        A full stack web application with CRUD functions created using Python. 
                        The app enables users to plan, track and manage travel adventures. 
                        Built over 5 days using Flask framework and SQL for the backend database.
                    </p>
                </div>
                <div className="project-container flex">
                    <div className="project-img"></div>
                    <h3>Cosmodex | Educational App | Group Project</h3>
                    <p>
                        An educational application built using the Vue.js framework. 
                        Designed with schoolchildren in mind, it educates the user about the Solar System in a fun and interactive way. 
                        The app renders components dynamically based on JSON format data fetched from external APIs and a MongoDB server.
                    </p>
                </div>
                <div className="project-container flex">
                    <div className="project-img"></div>
                    <h3>Shop Local | eCommerce App | Group Project</h3>
                    <p>
                        An e-commerce application that provides commercial clients with a platform to promote their businesses and enables individual customers to find and book services available in their local area. 
                        The application is built with responsive components and laid out using the React framework. 
                        Backend written using Spring Data REST in Java.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Projects;