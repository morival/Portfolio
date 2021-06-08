import React from "react";
import ContactForm from './ContactForm';
import './contact.css';

function Contact() {

    return(
        <section id="contact">
            <div className="deco-container">
                {/* <div className="deco-side-container">
                    <div className="deco-left"></div>
                </div>
                <div className="deco-side-container">
                    <div className="deco-right"></div>
                </div> */}
            </div>
            <h2>
                Contact Me
            </h2>
            <ContactForm/>
        
        </section>
    )
}

export default Contact;