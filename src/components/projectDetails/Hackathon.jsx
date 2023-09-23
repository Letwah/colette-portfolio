import React from "react";
import "./projectDetails.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const Hackathon = () => {
  return (
    <>
      <section className="projectDetailsContainer">
        <h2>Project: Hackathon - Anti Divorce App</h2>
        <div className="projectDetailsContainerInner">
          <div className="projectDetailsVideo">
            <ReactPlayer
              url="../assets/videos/AntiDivorceApp.mp4"
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
            <p>Axios, SCSS, HTML5</p>
            <h3>What it Does: </h3>
            <p>
              A React Redux app for setting up key dates in a calendar and
              searching gifts.
            </p>
            <h3>What It Demonstrates:</h3>
            <p>
              Responsible for designing and implementing styles, collaborating
              with a team to integrate SCSS into the app.
            </p>
          </div>
        </div>
        <div className="projectLinks">
          <div>
            <Link to="/project-details/simpsons-api">
              <p>
                <img src="../assets/images/ph_arrow-left-bold.svg"></img>
              </p>
            </Link>
          </div>
          <div>
            <a
              href="https://anti-divorce-hackathon.netlify.app/"
              target="_blank"
            >
              <p>View Live</p>
            </a>
          </div>
          <div>
            <a href="https://github.com/Letwah/divorce-app" target="_blank">
              <p>Git Repo</p>
            </a>
          </div>
          <div>
            <Link to="/project-details/jimmy-hutch">
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

export default Hackathon;
