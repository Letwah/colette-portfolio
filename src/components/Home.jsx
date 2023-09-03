import React from "react";
import "./home/home.css";
// import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="hero" id="hero">
        <div className="about animate-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hi, I'm a Frontend Engineer and visual designer.
          </p>
        </div>
        <img
          src="../../assets/images/Colette_cutout.png"
          alt="colette-smith"
          loading="lazy"
          className="profile-img"
        ></img>
      </section>
    </>
  );
};

export default Home;
