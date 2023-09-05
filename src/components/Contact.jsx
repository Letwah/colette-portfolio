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
          <div className="contactImg">
            <img src="../../assets/images/hero/hutchmobilemockup.png">
              {/* put some kind of cool mousemove image here */}
            </img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
