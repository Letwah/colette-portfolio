import React from "react";
// import { motion } from "framer-motion";
import "./projects/projects.css";
import HoverVideoPlayer from "react-hover-video-player";
import PausedOverlay from "./projects/PausedOverlay";
import LoadingOverlay from "./projects/LoadingOverlay";

const handleButtonClick = (link) => {
  window.open(link); // new tab
};

const Projects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="projectsContainer top">
          <div className="projectsCard">
            <HoverVideoPlayer
              className="vidContainer"
              videoSrc="./assets/videos/PexelsSearchProject.mp4"
              // The video and overlays should expand to fill the 16:9 container

              pausedOverlay={
                <PausedOverlay
                  title="Pexels Search Project 🔍"
                  description="Implements infinite scroll and retrieves data from an API using Fetch, featuring modal components. "
                />
              }
              loadingOverlay={<LoadingOverlay />}
            />
            <button
              className="projectCTA"
              onClick={() =>
                handleButtonClick("https://vanillaslidesearch.netlify.app/")
              }
            >
              View Live
            </button>
          </div>
          <div className="projectsCard">
            <HoverVideoPlayer
              className="vidContainer"
              videoSrc="./assets/videos/StudioFrieghtClone.mp4"
              pausedOverlay={
                <PausedOverlay
                  title="Studio Frieght Clone ⚡️"
                  description="A direct clone of the Studio Freight homepage."
                />
              }
              loadingOverlay={<LoadingOverlay />}
            />
            <button
              className="projectCTA"
              onClick={() =>
                handleButtonClick("https://studiofrieghtclone.netlify.app/")
              }
            >
              View Live
            </button>
          </div>
          <div className="projectsCard">
            <HoverVideoPlayer
              className="vidContainer"
              videoSrc="./assets/videos/SimpsonsReactRedux.mp4"
              pausedOverlay={
                <PausedOverlay
                  title="Simpsons API 🍩"
                  description="A mobile-first React Redux app with filtering options, gathering data from the Simpsons API using Axios"
                />
              }
              loadingOverlay={<LoadingOverlay />}
            />
            <button
              className="projectCTA"
              onClick={() =>
                handleButtonClick(
                  "https://simpsonsreactreduxtoolkit.netlify.app/"
                )
              }
            >
              View Live
            </button>
          </div>
          <div className="projectsCard">
            <HoverVideoPlayer
              className="vidContainer"
              videoSrc="./assets/videos/ColettesTodo.mp4"
              pausedOverlay={
                <PausedOverlay
                  title="Cute ToDo App 💅🏻"
                  description="A DoTo react app, using GSAP to style."
                />
              }
              loadingOverlay={<LoadingOverlay />}
            />
            <button
              className="projectCTA"
              onClick={() =>
                handleButtonClick("https://colettes-todo-app.netlify.app/")
              }
            >
              View Live
            </button>
          </div>
          <div className="projectsCard">
            <HoverVideoPlayer
              className="vidContainer"
              videoSrc="./assets/videos/jimmyhutch.mp4"
              pausedOverlay={
                <PausedOverlay
                  title="Jimmy Hutch Artist 🎨"
                  description="A fullstack app designed to showcase an artist's portfolio"
                />
              }
              loadingOverlay={<LoadingOverlay />}
            />
            <button
              className="projectCTA"
              onClick={() => handleButtonClick("https://www.jimmyhutch.uk/")}
            >
              View Live
            </button>
          </div>
          <div className="projectsCard">
            <HoverVideoPlayer
              className="vidContainer"
              videoSrc="./assets/videos/AntiDivorceApp.mp4"
              pausedOverlay={
                <PausedOverlay
                  title="Hackathon Project 🤓"
                  description="A React Redux app for setting up key dates in a calendar and searching gifts."
                />
              }
              loadingOverlay={<LoadingOverlay />}
            />{" "}
            <button
              className="projectCTA"
              onClick={() =>
                handleButtonClick("https://anti-divorce-hackathon.netlify.app/")
              }
            >
              View Live
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
