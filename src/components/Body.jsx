import React from "react";
import "./body/body.css";
import Hero from "./Hero";
import Portfolio from "./portfolio/Portfolio";

const Body = () => {
  return (
    <>
      <section className="content">
        <Portfolio />
      </section>
    </>
  );
};

export default Body;
