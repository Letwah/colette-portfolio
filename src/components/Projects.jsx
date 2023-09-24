import React from "react";
// import { motion } from "framer-motion";
import "./projects/projects.css";
import HoverVideoPlayer from "react-hover-video-player";
import PausedOverlay from "./projects/PausedOverlay";
import LoadingOverlay from "./projects/LoadingOverlay";
// import ProjectDetails from "./ProjectDetails";
import { Link } from "react-router-dom";

const handleButtonClick = (link) => {
  window.open(link); // new tab
};
// const Projects = (title, description) => {
const Projects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="projectsTitle">
          <h2>Projects</h2>
          <img src="./assets/images/arrowdowright.png"></img>
        </div>

        <div className="projectsContainer top">
          <div className="projectsCard">
            <Link to="/project-details/jimmy-hutch">
              <HoverVideoPlayer
                className="vidContainer"
                videoSrc="./assets/videos/jimmyhutch.mp4"
                pausedOverlay={
                  <img
                    src="./assets/images/projects/JimmyHutchThumb.png"
                    alt=""
                    style={{
                      // Make the image expand to cover the video's dimensions
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                loadingOverlay={<LoadingOverlay />}
              />
            </Link>
            <h3>Jimmy Hutch Artist 🎨</h3>
            <p>A fullstack app designed to showcase an artist's portfolio.</p>
            <div className="techIcons">
              <img src="./assets/images/tech_icons/react.svg" />
              <img src="./assets/images/tech_icons/redux.svg" />
              <img src="./assets/images/tech_icons/styledcomponents.svg" />
              <img src="./assets/images/tech_icons/sass.svg" />
              <img src="./assets/images/tech_icons/figma.svg" />
              <img src="./assets/images/tech_icons/greensock.svg" />
            </div>

            <div className="cardCTAs">
              <button className="projectCTA">
                <Link to="/project-details/jimmy-hutch">Project Info</Link>
              </button>
              <button
                className="projectCTA"
                onClick={() => handleButtonClick("https://www.jimmyhutch.uk/")}
              >
                Live Site
              </button>
              <button
                className="projectCTA"
                onClick={() =>
                  handleButtonClick("https://github.com/Letwah/hutch-app")
                }
              >
                Git Repo
              </button>
            </div>
          </div>
          <div className="projectsCard">
            <Link to="/project-details/vanilla-slide">
              <HoverVideoPlayer
                className="vidContainer"
                videoSrc="./assets/videos/PexelsSearchProject.mp4"
                // The video and overlays should expand to fill the 16:9 container
                pausedOverlay={
                  <img
                    src="./assets/images/projects/VanillaSlideThumb.png"
                    alt=""
                    style={{
                      // Make the image expand to cover the video's dimensions
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                // pausedOverlay={<PausedOverlay />}
                loadingOverlay={<LoadingOverlay />}
              />
            </Link>
            <h3>Vanilla Image Search🔍</h3>
            <p>
              Implements infinite scroll and retrieves data from an API using
              Fetch, featuring modal components.
            </p>
            <div className="techIcons">
              <img src="./assets/images/tech_icons/javascript.svg" />
              <img src="./assets/images/tech_icons/sass.svg" />
              <img src="./assets/images/tech_icons/greensock.svg" />
              <img src="./assets/images/tech_icons/html5.svg" />
            </div>

            <div className="cardCTAs">
              <button className="projectCTA">
                <Link to="/project-details/vanilla-slide">Project Info</Link>
              </button>
              <button
                className="projectCTA"
                onClick={() =>
                  handleButtonClick("https://vanillaslidesearch.netlify.app/")
                }
              >
                Live Site
              </button>
              <button
                className="projectCTA"
                onClick={() =>
                  handleButtonClick("https://github.com/Letwah/VanillaProject")
                }
              >
                Git Repo
              </button>
            </div>
          </div>
          <div className="projectsCard">
            <Link to="/project-details/studio-frieght">
              <HoverVideoPlayer
                className="vidContainer"
                videoSrc="./assets/videos/StudioFrieghtClone.mp4"
                pausedOverlay={
                  <img
                    src="./assets/images/projects/StudioFrieghtThumb.png"
                    alt=""
                    style={{
                      // Make the image expand to cover the video's dimensions
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                loadingOverlay={<LoadingOverlay />}
              />
            </Link>
            <h3>Studio Frieght Clone ⚡️</h3>
            <p>A direct clone of the Studio Freight homepage.</p>
            <div className="techIcons">
              <img src="./assets/images/tech_icons/javascript.svg" />
              <img src="./assets/images/tech_icons/sass.svg" />
              <img src="./assets/images/tech_icons/html5.svg" />
            </div>

            <div className="cardCTAs">
              <button className="projectCTA">
                <Link to="/project-details/studio-frieght">Project Info</Link>
              </button>
              <button
                className="projectCTA"
                onClick={() =>
                  handleButtonClick("https://studiofrieghtclone.netlify.app/")
                }
              >
                Live Site
              </button>
              <button
                className="projectCTA"
                onClick={() =>
                  handleButtonClick("https://github.com/Letwah/StudioF")
                }
              >
                Git Repo
              </button>
            </div>
          </div>
          <div className="projectsCard">
            <Link to="/project-details/simpsons-api">
              <HoverVideoPlayer
                className="vidContainer"
                videoSrc="./assets/videos/SimpsonsReactRedux.mp4"
                pausedOverlay={
                  <img
                    src="./assets/images/projects/SimpsonsThumb.png"
                    alt=""
                    style={{
                      // Make the image expand to cover the video's dimensions
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                // pausedOverlay={
                //   <PausedOverlay
                //   // title="Simpsons API 🍩"
                //   // description="A mobile-first React Redux app with filtering options, gathering data from the Simpsons API using Axios"
                //   />
                // }
                loadingOverlay={<LoadingOverlay />}
              />
            </Link>
            <h3>Simpsons API 🍩</h3>
            <p>
              A mobile-first React Redux app with filtering options, gathering
              data from the Simpsons API using Axios.
            </p>
            <div className="techIcons">
              <img src="./assets/images/tech_icons/react.svg" />
              <img src="./assets/images/tech_icons/redux.svg" />

              <img src="./assets/images/tech_icons/figma.svg" />
            </div>

            <div className="cardCTAs">
              <button className="projectCTA">
                <Link to="/project-details/simpsons-api">Project Info</Link>
              </button>
              <button
                className="projectCTA"
                onClick={() =>
                  handleButtonClick(
                    "https://simpsonsreactreduxtoolkit.netlify.app"
                  )
                }
              >
                Live Site
              </button>
              <button
                className="projectCTA"
                onClick={() =>
                  handleButtonClick("https://github.com/Letwah/simp-redux-tool")
                }
              >
                Git Repo
              </button>
            </div>
          </div>
          {/* <div className="projectsCard">
            <HoverVideoPlayer
              className="vidContainer"
              videoSrc="./assets/videos/ColettesTodo.mp4"
              pausedOverlay={
                <img
                  src="./assets/images/projects/ToDoThumb.png"
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              loadingOverlay={<LoadingOverlay />}
            />
            <h3>Cute ToDo App 💅🏻</h3>
            <p>A DoTo react app, using GSAP to style.</p>
            <div>
              <Link to="/project-details/todo">
                <p>Project Details</p>
              </Link>
            </div>
            <button
              className="projectCTA"
              onClick={() =>
                handleButtonClick("https://colettes-todo-app.netlify.app/")
              }
            >
              View Live
            </button>
          </div> */}

          <div className="projectsCard">
            <Link to="/project-details/hackathon">
              <HoverVideoPlayer
                className="vidContainer"
                videoSrc="./assets/videos/AntiDivorceApp.mp4"
                pausedOverlay={
                  <img
                    src="./assets/images/projects/AntiDivorceThumb.png"
                    alt=""
                    style={{
                      // Make the image expand to cover the video's dimensions
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                loadingOverlay={<LoadingOverlay />}
              />
            </Link>
            <h3>Hackathon Project 🤓</h3>
            <p>
              A React Redux app for setting up key dates in a calendar and
              searching gifts.
            </p>
            <div className="techIcons">
              <img src="./assets/images/tech_icons/react.svg" />
              <img src="./assets/images/tech_icons/redux.svg" />

              <img src="./assets/images/tech_icons/sass.svg" />
              <img src="./assets/images/tech_icons/figma.svg" />
            </div>

            <div className="cardCTAs">
              <button className="projectCTA">
                <Link to="/project-details/hackathon">Project Info</Link>
              </button>
              <button
                className="projectCTA"
                onClick={() =>
                  handleButtonClick(
                    "https://anti-divorce-hackathon.netlify.app/"
                  )
                }
              >
                Live Site
              </button>
              <button
                className="projectCTA"
                onClick={() =>
                  handleButtonClick("https://github.com/Letwah/divorce-app")
                }
              >
                Git Repo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
