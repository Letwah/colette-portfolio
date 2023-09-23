import React, { useRef, useEffect, useState } from "react";
import { gsap, Power3 } from "gsap";
import "./home/home.css";
import Projects from "./Projects";
import Slider from "./Slider";
import Marquee from "react-fast-marquee";

import { Link } from "react-router-dom";
import ContactForm from "./contact/ContactForm";

const Home = () => {
  const homeRef = useRef(null);
  const textLinesRef = useRef([]);
  const imageRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    // Set initial visibility
    gsap.set(homeRef.current, { visibility: "visible" });
    gsap.set(paraRef.current, { visibility: "visible", opacity: 0 });
    gsap.set(btnRef.current, { visibility: "visible", opacity: 0 });

    // Use the `to` method to animate your elements
    gsap.to(homeRef.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: Power3.ease, // Easing function
    });

    if (!animationPlayed) {
      // Animate text lines sequentially
      gsap.fromTo(
        textLinesRef.current,
        {
          visibility: "visible", // Show text lines before animation
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: Power3.ease,
          stagger: 0.5,
          onComplete: () => {
            // Animation complete callback
          },
        }
      );

      gsap.fromTo(
        paraRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: Power3.easeOut,
          delay: 1.5,
        }
      );

      gsap.fromTo(
        btnRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: Power3.easeOut,
          delay: 1.8,
        }
      );

      setAnimationPlayed(true);
    }

    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: Power3.easeOut,
        delay: 0.5,
      }
    );
  }, [animationPlayed]);

  return (
    <>
      <section className="hero" ref={homeRef} id="hero">
        <div className="heroContainer">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-content-inner">
                <h2 className="about-title">
                  <div
                    className="hero-content-line"
                    ref={(el) => textLinesRef.current.push(el)}
                  >
                    Hi, I'm Colette,
                  </div>
                  <div
                    className="hero-content-line"
                    ref={(el) => textLinesRef.current.push(el)}
                  >
                    a JavaScript front-end developer
                  </div>
                  <div
                    className="hero-content-line"
                    ref={(el) => textLinesRef.current.push(el)}
                  >
                    with a background in visual design.
                  </div>
                </h2>

                <p ref={paraRef} className="about-text">
                  For more info please visit my{" "}
                  <a
                    href="https://www.linkedin.com/in/colette-smith-developer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>{" "}
                  or take a look at my portfolio of recent projects.
                </p>
                <button ref={btnRef} className="homeCTA">
                  <Link to="/projects">Projects</Link>
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-inner">
                <img
                  src="../../assets/images/Colette_cutout.png"
                  alt="colette-smith"
                  loading="lazy"
                  className="profile-img"
                  ref={imageRef}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Marquee>
        <h1>
          ✱ FEATURED PROJECTS ✱ FEATURED PROJECTS ✱ FEATURED PROJECTS ✱ FEATURED
          PROJECTS ✱ FEATURED PROJECTS
        </h1>
      </Marquee>
      <Slider />
      <Projects />
      <section className="homeContact">
        <div className="projectsTitle">
          <h2>Contact</h2>
          <img src="./assets/images/arrowdowright.png"></img>
        </div>
        <ContactForm
          style={{
            width: "94vw",
            margin: "2rem auto",
            backgroundColor: "var(--transparent-bg)",
          }}
        />
      </section>
    </>
  );
};

export default Home;
