import React from "react";
// import { motion } from "framer-motion";
import "./projects/projects.css";

const Projects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="projectsContainer top">
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
