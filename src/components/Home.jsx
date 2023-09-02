import React from "react";
import "./home/home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="hero" id="about">
        <div className="about animate__animated animate__shakeX">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Colette Smith is a Frontend Engineer and visual designer.
          </p>
        </div>
        <img
          src="../../assets/images/Colette_cutout.png"
          alt="colette-smith"
          loading="lazy"
          className="profile-img"
        ></img>
        <Link to="contact">You can contact us by submitting form</Link>
      </section>
    </>
  );
};

export default Home;
