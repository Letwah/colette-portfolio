import React from "react";
import "./projectDetails.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const ToDo = () => {
  return (
    <>
      <section className="projectDetailsContainer">
        <div className="projectDetailsVideo">
          <ReactPlayer
            url="../assets/videos/ColettesTodo.mp4"
            className="react-player"
            width="75%"
            height="100%"
            muted={true}
            loop={true}
            playing={true}
          />
        </div>
        <div className="projectDetailsText">
          <h2>Project: Simple To Do App</h2>

          <h3>Tech Used:</h3>
          <p>GSAP, HTML 5, CSS, SCSS, JS</p>
          <h3>What it Does: </h3>
          <p>A DoTo react app, using GSAP to style.</p>
          <h3>What It Demonstrates:</h3>
          <p>
            Proficiency in writing React, advanced styling and layout
            techniques, along with GSAP animation integration.
          </p>
          <div className="projectLinks">
            <div>
              <a href="https://colettes-todo-app.netlify.app/" target="_blank">
                <p>⤵ </p>
                <p>View Live site</p>
              </a>
            </div>
            <div>
              <Link to="/project-details/jimmy-hutch">
                <p>Next Project</p>
              </Link>
            </div>
            <div>
              <Link to="/">
                <p>HOME</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToDo;
