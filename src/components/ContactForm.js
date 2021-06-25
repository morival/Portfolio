import React, { useState } from "react";
import './contact.css';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3002/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <label htmlFor="name">Name:</label> */}
        <input placeholder="Name" type="text" id="name" required />
      </div>
      <div>
        {/* <label htmlFor="email">Email:</label> */}
        <input placeholder="Email" type="email" id="email" required />
      </div>
      <div>
        {/* <label htmlFor="message">Message:</label> */}
        <textarea placeholder="Message" id="message" required />
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