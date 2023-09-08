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
          <div className="projectsCard">
            <HoverVideoPlayer
              videoSrc="./assets/videos/PexelsSearchProject.mp4"
              pausedOverlay={<PausedOverlay />}
              loadingOverlay={<LoadingOverlay />}
            />
          </div>
          <div className="projectsCard">
            <HoverVideoPlayer
              videoSrc="./assets/videos/StudioFrieghtClone.mp4"
              pausedOverlay={<PausedOverlay />}
              loadingOverlay={<LoadingOverlay />}
            />
          </div>
          <div className="projectsCard">
            <HoverVideoPlayer
              videoSrc="./assets/videos/SimpsonsReactRedux.mp4"
              pausedOverlay={<PausedOverlay />}
              loadingOverlay={<LoadingOverlay />}
            />
          </div>
          <div className="projectsCard">
            <HoverVideoPlayer
              videoSrc="./assets/videos/ColettesTodo.mp4"
              pausedOverlay={<PausedOverlay />}
              loadingOverlay={<LoadingOverlay />}
            />
          </div>
          <div className="projectsCard">
            <HoverVideoPlayer
              videoSrc="./assets/videos/jimmyhutch.mp4"
              pausedOverlay={<PausedOverlay />}
              loadingOverlay={<LoadingOverlay />}
            />
          </div>
          <div className="projectsCard">
            <HoverVideoPlayer
              videoSrc="./assets/videos/AntiDivorceApp.mp4"
              pausedOverlay={<PausedOverlay />}
              loadingOverlay={<LoadingOverlay />}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
