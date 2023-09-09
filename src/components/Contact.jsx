import React from "react";
import "./contact/contact.css";
import Shader from "./Shader";
import ContactForm from "./contact/ContactForm";
// import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      {" "}
      <section className="contact" id="contact">
        <div className="contactBackground">
          <Shader
            setUniforms={{
              u_time: "0.0",
              u_resolution: "vec2(800.0, 600.0)",
              u_mouse: "vec2(0.0, 0.0)",
              image: "./assets/images/hero/Hutch.jpg", // Add the path to your image here
            }}
          />

          <div className="contactForm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
