import React from 'react';
import '../../css/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Add animated wave layers here */}
      <div className="lightning-bg">
    <div className="wave wave1"></div>
    <div className="wave wave2"></div>
    <div className="wave wave3"></div>
  </div>

      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Have a question or feedback? Drop us a message!</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
