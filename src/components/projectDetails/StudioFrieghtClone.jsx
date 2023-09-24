import React from "react";
import "./projectDetails.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const StudioFrieghtClone = () => {
  return (
    <>
      <section className="projectDetailsContainer">
        <div>
          <h2>Project: Studio Frieght Clone</h2>
        </div>
        <div className="projectDetailsContainerInner">
          <div className="projectDetailsVideo">
            <ReactPlayer
              url="../assets/videos/StudioFrieghtClone.mp4"
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
            <p>HTML 5, CSS, SCSS, JS</p>
            <h3>What it Does: </h3>
            <p>A direct clone of the Studio Freight homepage.</p>
            <h3>What It Demonstrates:</h3>
            <p>
              <p>
                <strong>Precision in HTML & CSS:</strong> Produced an accurate
                clone of the Studio Freight homepage, highlighting mastery in
                HTML and CSS.
              </p>
              <p>
                <strong>Efficient Use of SCSS:</strong> Employed SCSS for
                streamlined and maintainable styling, showcasing proficiency in
                CSS pre-processing.
              </p>
              <p>
                <strong>Utilization of CSS Grid:</strong> Demonstrated expertise
                in layout design through thes use of CSS Grid for responsive web
                design.
              </p>
              <p>
                <strong>HTML5 Structuring:</strong> Adhered to HTML5 best
                practices for semantic and well-structured markup.
              </p>
              <p>
                <strong>Custom JS Cursor Implementation:</strong> Implemented a
                custom cursor using vanilla JavaScript, showcasing an added
                layer of interactivity.
              </p>
            </p>
            <div className="techIcons">
              <img src="../assets/images/tech_icons/javascript.svg" />
              <img src="../assets/images/tech_icons/sass.svg" />
              <img src="../assets/images/tech_icons/html5.svg" />
            </div>
          </div>
        </div>
        <div className="projectLinks">
          <div>
            <Link to="/project-details/vanilla-slide">
              <p>
                <img src="../assets/images/ph_arrow-left-bold.svg"></img>
              </p>
            </Link>
          </div>
          <div>
            <a href="https://studiofrieghtclone.netlify.app/" target="_blank">
              <p>View Live</p>
            </a>
          </div>
          <div>
            <a href="https://github.com/Letwah/StudioF" target="_blank">
              <p>Git Repo</p>
            </a>
          </div>
          <div>
            <Link to="/project-details/simpsons-api">
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

export default StudioFrieghtClone;
