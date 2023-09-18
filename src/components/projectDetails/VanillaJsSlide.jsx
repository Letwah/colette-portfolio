import React from "react";
import "./projectDetails.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const VanillaJsSlide = () => {
  return (
    <>
      <section className="projectDetailsContainer">
        <h2>Project: Vanilla JS Slide Show</h2>
        <div className="projectDetailsContainerInner">
          <div className="projectDetailsVideo">
            <ReactPlayer
              url="../assets/videos/PexelsSearchProject.mp4"
              className="react-player"
              width="75%"
              height="100%"
              muted={true}
              loop={true}
              playing={true}
            />
          </div>
          <div className="projectDetailsText">
            <h3>Tech Used:</h3>
            <p>Fetch, GSAP, HTML 5, CSS, SCSS, JS</p>
            <h3>What it Does: </h3>
            <p>
              Implements infinite scroll and retrieves data from an API using
              Fetch, featuring modal components.
            </p>
            <h3>What It Demonstrates:</h3>
            <p>
              Proficiency in writing vanilla JavaScript, DOM manipulation,
              advanced styling and layout techniques, along with GSAP animation
              integration.
            </p>
          </div>
        </div>
        <div className="projectLinks">
          <div>
            <a href="https://vanillaslidesearch.netlify.app/" target="_blank">
              <p>View Live site</p>
            </a>
          </div>
          <div>
            <Link to="/project-details/studio-frieght">
              <p>Next Project</p>
            </Link>
          </div>
          <div>
            <Link to="/">
              <p>HOME</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default VanillaJsSlide;
