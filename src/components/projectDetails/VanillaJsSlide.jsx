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
              <p>
                <strong>Vanilla JavaScript Proficiency:</strong> Implemented
                infinite scroll and API data retrieval using Fetch, showcasing
                advanced JavaScript skills.
              </p>
              <p>
                <strong> DOM Manipulation Mastery:</strong> Demonstrated
                expertise in manipulating the DOM for dynamic content rendering.
              </p>
              <p>
                <strong> Advanced Styling Techniques:</strong> Utilized CSS,
                SCSS, and HTML 5 for refined and responsive layouts.
              </p>
              <p>
                <strong>GSAP Animation Integration:</strong> Integrated GSAP for
                engaging and interactive user interface elements, including the
                modal component implementation, for an enhanced user experience.
              </p>
            </p>
            <div className="techIcons">
              <img src="../assets/images/tech_icons/javascript.svg" />
              <img src="../assets/images/tech_icons/sass.svg" />
              <img src="../assets/images/tech_icons/greensock.svg" />
              <img src="../assets/images/tech_icons/html5.svg" />
            </div>
          </div>
        </div>
        <div className="projectLinks">
          <div>
            <Link to="/project-details/jimmy-hutch">
              <p>
                <img src="../assets/images/ph_arrow-left-bold.svg"></img>
              </p>
            </Link>
          </div>
          <div>
            <a href="https://vanillaslidesearch.netlify.app/" target="_blank">
              <p>View Live</p>
            </a>
          </div>
          <div>
            <a href="https://github.com/Letwah/VanillaProject" target="_blank">
              <p>Git Repo</p>
            </a>
          </div>
          <div>
            <Link to="/project-details/studio-frieght">
              <p>
                <img src="../assets/images/ph_arrow-right-bold.svg"></img>
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default VanillaJsSlide;
