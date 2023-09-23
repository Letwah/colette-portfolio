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
              Showcases HTML and CSS skills for closely replicating the original
              site's appearance, utilising CSS Grid, SCSS pre-processing
              language, and adhering to HTML5 structure.
            </p>
          </div>
        </div>
        <div className="projectLinks">
          <div>
            <a href="https://studiofrieghtclone.netlify.app/" target="_blank">
              <p>View Live</p>
            </a>
          </div>
          <div>
            <Link to="/project-details/simpsons-api">
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

export default StudioFrieghtClone;
