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
              <strong>Efficient API Integration with Axios:</strong>
              Successfully retrieved data for setting up key dates and gift
              searching, demonstrating proficiency in working with external
              APIs.
            </p>
            <p>
              <strong>SCSS Styling Mastery:</strong>
              Designed and implemented styles using SCSS, showcasing expertise
              in modern and maintainable CSS pre-processing.{" "}
            </p>
            <p>
              <strong>Collaborative Teamwork:</strong> Worked collaboratively
              with a team to integrate SCSS into the app, demonstrating strong
              communication and teamwork skills.
            </p>
            <div className="techIcons">
              <img src="../assets/images/tech_icons/react.svg" />
              <img src="../assets/images/tech_icons/redux.svg" />

              <img src="../assets/images/tech_icons/sass.svg" />
              <img src="../assets/images/tech_icons/figma.svg" />
            </div>
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
              rel="noreferrer"
            >
              <p>View Live</p>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Letwah/divorce-app"
              rel="noreferrer"
              target="_blank"
            >
              <p>Git Repo</p>
            </a>
          </div>
          <div>
            <Link to="/project-details/she-chats-tech">
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
