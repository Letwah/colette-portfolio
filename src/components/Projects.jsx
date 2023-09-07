import React from "react";
// import { motion } from "framer-motion";
import "./projects/projects.css";
import HoverVideoPlayer from "react-hover-video-player";
import PausedOverlay from "./projects/PausedOverlay";
import LoadingOverlay from "./projects/LoadingOverlay";

const Projects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="projectsContainer top">
          <HoverVideoPlayer
            videoSrc="https://youtu.be/C3p7ACl4qEM"
            pausedOverlay={<PausedOverlay />}
            loadingOverlay={<LoadingOverlay />}
          />
          <div className="projectsCard">
            <div className="projectImg">
              <img src="./assets/images/hero/Mockup.jpg"></img>
            </div>
          </div>
          <div className="projectsCard">
            <div className="projectImg">
              <img src="./assets/images/hero/Mockup.jpg"></img>
            </div>
          </div>
          <div className="projectsCard">
            <div className="projectImg">
              <img src="./assets/images/hero/Mockup.jpg"></img>
            </div>
          </div>
          <div className="projectsCard">
            <div className="projectImg">
              <img src="./assets/images/hero/Mockup.jpg"></img>
            </div>
          </div>
          <div className="projectsCard">
            <div className="projectImg">
              <img src="./assets/images/hero/Mockup.jpg"></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
