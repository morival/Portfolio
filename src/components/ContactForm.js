import dotenv from 'dotenv';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';


dotenv.config()


const ContactForm = () => {
  const [status, setStatus] = useState('Submit');
  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setStatus("Message Sent");
      }, (error) => {
          console.log(error.text);
          setStatus("error");
      });
      
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input placeholder="Name" type="text" id="name" name="name" required />
      </div>
      <div>
        <input placeholder="Email" type="email" id="email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Message" id="message" name="message" required />
      </div>
      <div className="form-footer">
        <div className="btn-wrapper">
          <button className="btn-submit" type="submit">{status}</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;