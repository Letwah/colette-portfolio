import React from "react";
import "./projectDetails.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const SimpsonsAPI = () => {
  return (
    <>
      <section className="projectDetailsContainer">
        <h2>Project: Simpsons API</h2>
        <div className="projectDetailsContainerInner">
          <div className="projectDetailsVideo">
            <ReactPlayer
              url="../assets/videos/SimpsonsReactRedux.mp4"
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
            <p>React Redux, Toolkit, Axios, HTML 5, CSS, SCSS, JS</p>
            <h3>What it Does: </h3>
            <p>
              A mobile-first React Redux app with filtering options, like,
              dislike, delete, and character direction toggling, retrieving data
              from the Simpsons API using Axios.
            </p>
            <h3>What It Demonstrates:</h3>
            <p>
              Demonstrates setting up an app using React Redux Toolkit for data
              retrieval and filtering from an API, as well as complete styling
              from scratch.
            </p>
          </div>
        </div>
        <div className="projectLinks">
          <div>
            <a
              href="https://simpsonsreactreduxtoolkit.netlify.app/"
              target="_blank"
            >
              <p>View Live site</p>
            </a>
          </div>
          <div>
            <Link to="/project-details/todo">
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

export default SimpsonsAPI;
