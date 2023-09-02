import React from "react";
import "./contact/contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section className="contact" id="about">
        <Link to="contact">You can contact us by submitting form</Link>
      </section>
    </>
  );
};

export default Contact;
