import React, { useState } from "react";
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      email: "",
      message: ""
    });
  };
  return (
    <div className="contact" id="#contact">
      <div className="contact-container">
        <h3 className="contact-subtitle">
          Get In <span>Touch</span>
        </h3>
        <h2 className="contact-title">Contact Me</h2>
      </div>
      <div className="contact-content">
        <form action="" className="contact-form">
            <div className="contact-group">
                <input type="text" name="username" required placeholder="Enter your name" value={formData.username}
              onChange={handleChange}/>
                <input type="email" name="email" required placeholder="Enter your email" value={formData.email}
              onChange={handleChange}/>
            </div>
            <textarea name="message" required cols="30" placeholder="Enter your message" rows="10" value={formData.message}
            onChange={handleChange}></textarea>
        </form>
        <p className="contact-message"></p>
        <button className="contact-btn" onClick={handleSubmit}>Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
