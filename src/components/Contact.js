import React from "react";
import CallbackForm from "./CallbackForm";

function Contact() {
  return (
    <section className="section contact-section">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <p><b>Address:</b><br />347 Benton Road,<br />Newcastle Upon Tyne, NE7 7EE</p>
          <p><b>Phone:</b> <a href="tel:07570018000">075 7001 8000</a></p>
          <p><b>Email:</b> <a href="mailto:info@mactechnewcastle.uk">info@mactechnewcastle.uk</a></p>
          <p>
            <b>Social:</b><br />
            <a href="https://www.facebook.com/profile.php?id=100064955131523" target="_blank" rel="noopener noreferrer">Facebook</a>| 
            <a href="https://www.instagram.com/mactechnewcastle/" target="_blank" rel="noopener noreferrer"> Instagram</a>
          </p>
        </div>
        <div className="contact-form">
          <CallbackForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
