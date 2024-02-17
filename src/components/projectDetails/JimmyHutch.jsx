import "./projectDetails.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const JimmyHutch = () => {
  return (
    <>
      <section className="projectDetailsContainer">
        <h2>Project: Portfolio for Artist Jimmy Hutch</h2>
        <div className="projectDetailsContainerInner">
          <div className="projectDetailsVideo">
            <ReactPlayer
              url="../assets/videos/jimmyhutch.mp4"
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

            <p>Full Stack React Redux app, using GSAP and SCSS</p>
            <h3>What it Does: </h3>
            <p>
              This is a React Redux app designed to showcase an artist&apos;s
              portfolio.
            </p>
            <h3>What It Demonstrates:</h3>
            <p>
              <p>
                <strong>Full Stack Development:</strong> Created a React Redux
                app with GSAP animations and SCSS styling, showcasing
                proficiency in modern frontend technologies.
              </p>
              <p>
                <strong>Animation Expertise:</strong> Implemented intricate
                animations using GSAP, enhancing user interaction and visual
                appeal.
              </p>
              <p>
                <strong>State Management with Redux:</strong> Utilized Redux
                Toolkit for efficient state management, ensuring seamless user
                experience.
              </p>
              <p>
                <strong>Form Validation and Notifications:</strong> Integrated
                Joi for validation and Toastify for user-friendly notifications,
                prioritizing data integrity and user feedback.
              </p>
              <p>
                <strong>Database Integration:</strong> Employed SQL for
                effective data storage and retrieval, demonstrating proficiency
                in backend integration.
              </p>
              <p>
                <strong>Deployment and Hosting:</strong> Successfully deployed
                using cPanel, showcasing the ability to manage web hosting
                environments.
              </p>
            </p>

            <div className="techIcons">
              <img src="../assets/images/tech_icons/react.svg" />
              <img src="../assets/images/tech_icons/redux.svg" />
              <img src="../assets/images/tech_icons/styledcomponents.svg" />
              <img src="../assets/images/tech_icons/sass.svg" />
              <img src="../assets/images/tech_icons/figma.svg" />
              <img src="../assets/images/tech_icons/greensock.svg" />
            </div>
          </div>
        </div>
        <div className="projectLinks">
          <div>
            <Link to="/project-details/she-chats-tech">
              <p>
                <img src="../assets/images/ph_arrow-left-bold.svg"></img>
              </p>
            </Link>
          </div>
          <div>
            <a
              href="https://www.jimmyhutch.uk/"
              target="_blank"
              rel="noreferrer"
            >
              <p>View Live</p>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Letwah/hutch-app"
              target="_blank"
              rel="noreferrer"
            >
              <p>Git Repo</p>
            </a>
          </div>
          <div>
            <Link to="/project-details/vanilla-slide">
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
