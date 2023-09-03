import React from "react";

import "./home/home.css";
import Projects from "./Projects";
// import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="hero" id="hero">
        <div className="about animate-text">
          <h2 className="about-title">
            Hi, I'm Colette, a creative front-end developer with a strong
            background in design.
          </h2>
          {/* <p className="about-text">
            My expertise lies in merging creative vision with robust technical
            skills to produce visually striking and immersive digital
            experiences.
          </p> */}
        </div>
        <img
          src="../../assets/images/Colette_cutout.png"
          alt="colette-smith"
          loading="lazy"
          className="profile-img"
        ></img>
      </section>
      <Projects />
    </>
  );
};

export default Home;
