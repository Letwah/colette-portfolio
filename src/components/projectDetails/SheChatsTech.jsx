import "./projectDetails.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const JimmyHutch = () => {
  return (
    <>
      <section className="projectDetailsContainer">
        <h2>Project: Community Page for She Chats Tech</h2>
        <div className="projectDetailsContainerInner">
          <div className="projectDetailsVideo">
            <ReactPlayer
              url="../assets/videos/shechatstech-site.mp4"
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

            <p>Frontend React Redux app, styled and designed on Figma</p>
            <h3>What it Does: </h3>
            <p>This is a React app designed to be a hub for the community.</p>
            <h3>What It Demonstrates:</h3>
            <p>
              <p>
                <strong>Animation Expertise:</strong> Implemented intricate
                animations using GSAP, Framer motion and React Swiper, enhancing
                user interaction and visual appeal.
              </p>
              <p>
                <strong>State Management with Redux:</strong> Utilized Redux
                Toolkit for efficient state management, ensuring seamless user
                experience.
              </p>
              <p>
                <strong>Form Validation and Notifications:</strong> Integrated
                Joi for validation prioritizing data integrity and user
                feedback.
              </p>
              <p>
                <strong>Deployment and Hosting:</strong> Successfully deployed
                using FileZilla, showcasing the ability to manage different web
                hosting environments.
              </p>
            </p>

            <div className="techIcons">
              <img src="../assets/images/tech_icons/react.svg" />
              <img src="../assets/images/tech_icons/redux.svg" />
              <img src="../assets/images/tech_icons/figma.svg" />
              <img src="../assets/images/tech_icons/greensock.svg" />
            </div>
          </div>
        </div>
        <div className="projectLinks">
          <div>
            <Link to="/project-details/hackathon">
              <p>
                <img src="../assets/images/ph_arrow-left-bold.svg"></img>
              </p>
            </Link>
          </div>
          <div>
            <a
              href="https://www.shechatstech.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p>View Live</p>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Letwah/She-Chats-Tech"
              target="_blank"
              rel="noreferrer"
            >
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

export default JimmyHutch;
