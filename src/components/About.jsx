import React from "react";
import "./about/about.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <section className="About" id="about">
        <Link to="About"> About COLETTE</Link>
      </section>
    </>
  );
};

export default About;
