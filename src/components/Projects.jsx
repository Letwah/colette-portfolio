import React from "react";
// import { motion } from "framer-motion";
import "./projects/projects.css";
import HoverVideoPlayer from "react-hover-video-player";
import PausedOverlay from "./projects/PausedOverlay";
import LoadingOverlay from "./projects/LoadingOverlay";
import ProjectDetails from "./ProjectDetails";

const handleButtonClick = (link) => {
  window.open(link); // new tab
};

const Projects = (title, description) => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="projectsTitle">
          <h2>Projects ⤵</h2>
        </div>
        <div className="projectsContainer top">
          <div className="projectsCard">
            <HoverVideoPlayer
              className="vidContainer"
              videoSrc="./assets/videos/PexelsSearchProject.mp4"
              // The video and overlays should expand to fill the 16:9 container

              pausedOverlay={<PausedOverlay />}
              loadingOverlay={<LoadingOverlay />}
            />
            <h3>"Pexels Search Project 🔍"</h3>
            <p>
              Implements infinite scroll and retrieves data from an API using
              Fetch, featuring modal components.
            </p>
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
              pausedOverlay={<PausedOverlay />}
              loadingOverlay={<LoadingOverlay />}
            />
            <h3>Studio Frieght Clone ⚡️</h3>
            <p>A direct clone of the Studio Freight homepage.</p>
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
                // title="Simpsons API 🍩"
                // description="A mobile-first React Redux app with filtering options, gathering data from the Simpsons API using Axios"
                />
              }
              loadingOverlay={<LoadingOverlay />}
            />

            <h3>Simpsons API 🍩</h3>
            <p>
              A mobile-first React Redux app with filtering options, gathering
              data from the Simpsons API using Axios.
            </p>
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
              pausedOverlay={<PausedOverlay />}
              loadingOverlay={<LoadingOverlay />}
            />
            <h3>Cute ToDo App 💅🏻</h3>
            <p>A DoTo react app, using GSAP to style.</p>
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
              pausedOverlay={<PausedOverlay />}
              loadingOverlay={<LoadingOverlay />}
            />
            <h3>Jimmy Hutch Artist 🎨</h3>
            <p>A fullstack app designed to showcase an artist's portfolio.</p>
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
              pausedOverlay={<PausedOverlay />}
              loadingOverlay={<LoadingOverlay />}
            />
            <h3>Hackathon Project 🤓</h3>
            <p>
              A React Redux app for setting up key dates in a calendar and
              searching gifts.
            </p>
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

      <ProjectDetails />
    </>
  );
};

export default Projects;
