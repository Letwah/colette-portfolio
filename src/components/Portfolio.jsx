import React from "react";
import { motion } from "framer-motion";
import "./portfolio/portfolio.css";

const Portfolio = () => {
  const hoverVariants = {
    hover: {
      scale: 1.03,
    }, ///add video oh hover here
  };

  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="left-layout">
          <motion.div
            className="project-link big big-left"
            whileHover="hover"
            variants={hoverVariants}
            // style={{
            //   backgroundImage: `url("../../assets/images/hero/Hutch.jpg")`,
            // }}
          >
            <div className="project-image-container">
              <img
                className="project-image-big"
                src="../../assets/images/hero/Hutch.jpg"
                alt="Project Image"
              />
            </div>
          </motion.div>
          <motion.div
            className="project-link small small-left"
            whileHover="hover"
            variants={hoverVariants}
          >
            <img
              className="project-image-small"
              src="../../assets/images/hero/Mockup.jpg"
              alt="Project Image"
            />
          </motion.div>
          <motion.div
            className="project-link small small-2-left"
            whileHover="hover"
            variants={hoverVariants}
          >
            <img
              className="project-image-small"
              src="../../assets/images/hero/Mockup.jpg"
              alt="Project Image"
            />
          </motion.div>
        </div>
        <div className="col-4 spacer"></div>
        <div className="right-layout">
          <motion.div
            className="project-link small small-right"
            whileHover="hover"
            variants={hoverVariants}
          >
            <img
              className="project-image-small"
              src="../../assets/images/hero/Mockup.jpg"
              alt="Project Image"
            />
          </motion.div>
          <motion.div
            className="project-link small small-2-right"
            whileHover="hover"
            variants={hoverVariants}
          >
            <img
              className="project-image-small"
              src="../../assets/images/hero/Mockup.jpg"
              alt="Project Image"
            />
          </motion.div>
          <motion.div
            className="project-link big big-right"
            whileHover="hover"
            variants={hoverVariants}
          >
            <img
              className="project-image-big"
              src="../../assets/images/hero/Hutch.jpg"
              alt="Project Image"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
