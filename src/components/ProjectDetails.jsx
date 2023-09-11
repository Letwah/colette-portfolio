import React from "react";
import "./projectDetails/projectDetails.css";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import VanillaJsSlide from "./projectDetails/VanillaJsSlide";
import StudioFrieghtClone from "./projectDetails/StudioFrieghtClone";
import SimpsonsAPI from "./projectDetails/SimpsonsAPI";
import ToDo from "./projectDetails/Todo";
import JimmyHutch from "./projectDetails/JimmyHutch";
import Hackathon from "./projectDetails/Hackathon";

const ProjectDetails = () => {
  let { projectName } = useParams();

  switch (projectName) {
    case "vanilla-slide":
      return <VanillaJsSlide />;
    case "studio-frieght":
      return <StudioFrieghtClone />;
    case "simpsons-api":
      return <SimpsonsAPI />;
    case "todo":
      return <ToDo />;
    case "jimmy-hutch":
      return <JimmyHutch />;
    case "hackathon":
      return <Hackathon />;
    default:
      return <div>Project not found</div>;
  }
};

export default ProjectDetails;
