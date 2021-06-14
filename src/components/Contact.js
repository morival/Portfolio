import React from "react";
import ContactForm from './ContactForm';
import './contact.css';

function Contact() {

    return(
        <section id="contact">
            <div className="deco-container"/>
            <h2>Contact Me</h2>
            <ContactForm/>
        
        </section>
    )
}

export default Contact;