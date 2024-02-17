import "./projectDetails.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const SimpsonsAPI = () => {
  return (
    <>
      <section className="projectDetailsContainer">
        <h2>Project: Simpsons API</h2>
        <div className="projectDetailsContainerInner">
          <div className="projectDetailsVideo">
            <ReactPlayer
              url="../assets/videos/SimpsonsReactRedux.mp4"
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
            <p>React Redux, Toolkit, Axios, HTML 5, CSS, SCSS, JS</p>
            <h3>What it Does: </h3>
            <p>
              A mobile-first React Redux app with filtering options, like,
              dislike, delete, and character direction toggling, retrieving data
              from the Simpsons API using Axios.
            </p>
            <h3>What It Demonstrates:</h3>
            <p>
              <p>
                <strong> React Redux Proficiency:</strong> Created a
                mobile-first app utilizing React Redux and Toolkit, showcasing
                advanced state management and data handling.
              </p>
              <p>
                <strong>API Integration with Axios:</strong> Retrieved data from
                the Simpsons API, demonstrating proficiency in working with
                external data sources.
              </p>
              <p>
                <strong>Interactive Features:</strong> Implemented
                functionalities like filtering, liking, disliking, deleting, and
                character direction toggling, highlighting user-friendly
                interactivity.
              </p>
              <p>
                <strong>Comprehensive Styling:</strong> Designed the app&apos;s
                styling from scratch using HTML, CSS, and SCSS, showcasing a
                mastery of frontend design.
              </p>
            </p>
            <div className="techIcons">
              <img src="../assets/images/tech_icons/react.svg" />
              <img src="../assets/images/tech_icons/redux.svg" />

              <img src="../assets/images/tech_icons/figma.svg" />
            </div>
          </div>
        </div>
        <div className="projectLinks">
          <div>
            <Link to="/project-details/studio-frieght">
              <p>
                <img src="../assets/images/ph_arrow-left-bold.svg"></img>
              </p>
            </Link>
          </div>
          <div>
            <a
              href="https://simpsonsreactreduxtoolkit.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <p>View Live</p>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Letwah/simp-redux-tool"
              target="_blank"
              rel="noreferrer"
            >
              <p>Git Repo</p>
            </a>
          </div>
          <div>
            <Link to="/project-details/hackathon">
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

export default SimpsonsAPI;
