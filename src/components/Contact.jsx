import React from "react";
import "./contact/contact.css";

import ContactForm from "./contact/ContactForm";
// import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contactForm">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
