import React, { useState } from 'react';
import Modal from './Modal';

export default function ProjectItem({ project }) {
    
    const { name, tech, img } = project;


    const [show, setShow] = useState(false);
    
    const handleMouseOver = () => setShow(true);
    
    const handleMouseOut = () => setShow(false);

    

    const [modal, setModal] = useState(false);

    const handleOpen = () => setModal(true);

    const handleClose = () => {
        setModal(false);
        setShow(false);
    }
    

    return(
        <div 
            className="project-container"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
        {modal === true ? (
            <Modal project={project} onClose={handleClose}/>
        ) : show ? (
            <div className='project-info' onClick={handleOpen}>
                <h2>{name}</h2>
                <h4>{tech}</h4>
                <button className='btn-open-modal'> Show more </button>
            </div>) : (
            <div className='project-img'>
                <img src={img} alt={name}/>
            </div>)}
        </div>
    )
};
