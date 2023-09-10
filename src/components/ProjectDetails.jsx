import React from "react";
import "./projectDetails/projectDetails.css";
import ReactPlayer from "react-player";

const ProjectDetails = () => {
  return (
    <>
      <section className="projectDetailsContainer">
        <div className="projectDetailsVideo">
          <ReactPlayer
            url="./assets/videos/PexelsSearchProject.mp4"
            className="react-player"
            width="75%"
            height="100%"
            muted={true}
            loop={true}
          />
        </div>
        <div className="projectDetailsText">
          <h2>Vanilla Slide Show</h2>
          <p>bla bla bla</p>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
