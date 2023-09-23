import React from "react";
import "./projectDetails.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const JimmyHutch = () => {
  return (
    <>
      <section className="projectDetailsContainer">
        <h2>Project: Portfolio for Artist Jimmy Hutch</h2>
        <div className="projectDetailsContainerInner">
          <div className="projectDetailsVideo">
            <ReactPlayer
              url="../assets/videos/jimmyhutch.mp4"
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
            <p>Full Stach React Redux app, using GSAP and SCSS</p>
            <h3>What it Does: </h3>
            <p>
              This is a React Redux app designed to showcase an artist's
              portfolio.
            </p>
            <h3>What It Demonstrates:</h3>
            <p>
              Utilised React Redux Toolkit, CSS, Styled Components for homepage
              animations, Joi for validation, Toastify for notifications, GSAP
              (Greensock) for animations (including modal and menu grid
              animations), SQL database for data storage, and cPanel.
            </p>
          </div>
        </div>
        <div className="projectLinks">
          <div>
            <a href="https://www.jimmyhutch.uk/" target="_blank">
              <p>View Live</p>
            </a>
          </div>
          <div>
            <Link to="/project-details/hackathon">
              <p>Next</p>
            </Link>
          </div>
          {/* <div>
            <Link to="/">
              <p>HOME</p>
            </Link>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default JimmyHutch;
