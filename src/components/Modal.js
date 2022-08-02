import React from "react";
import './modal.css';

function Modal({ project, onClose }) {

    const { name, tech, description, website, gitHub, img } = project

    const handleClose = () => {
        onClose();
    }

    const handleCloseBackDrop = (e) => {
        e.target.className === 'back-drop' && handleClose();
    }

    const redirect = (e) => {
        e.preventDefault();
        // console.log()
        window.location.href=`${e.target.value}`;
    }

    return(
        <div className='back-drop' onClick={handleCloseBackDrop}>
            <div className="modal-wrapper">
                <div className="modal-header">
                    <h3>{name}</h3>
                    <span className="close-modal-btn" onClick={handleClose}>X</span>
                </div>
                <div className="modal-image">
                    <img src={img} alt=""/>
                </div>
                <div className="modal-content">
                    <div className="modal-body flex">
                        <h4>{tech}</h4>
                        <p>{description}</p>
                        <div className="modal-links">
                            {website ? <button 
                                    className="btn btn-links"
                                    value={website}
                                    onClick={redirect}
                                >
                                    Visit website
                                </button>
                                : null
                            }
                            {gitHub ? <button className="btn btn-links" 
                                    value={gitHub}
                                    onClick={redirect}
                                >
                                    Show the code on GitHub
                                </button>
                                : null
                            }
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-cancel" onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;