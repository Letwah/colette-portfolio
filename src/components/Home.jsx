import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import "./home/home.css";
import Projects from "./Projects";

// import { Link } from "react-router-dom";
const Home = () => {
  const homeRef = useRef(null);
  const textLinesRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    // Set initial visibility
    gsap.set(homeRef.current, { visibility: "visible" });

    // Use the `to` method to animate your elements
    gsap.to(homeRef.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power3.out", // Easing function
    });

    // Animate text lines sequentially
    gsap.fromTo(
      textLinesRef.current,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.5, // Time between each line
        onComplete: () => {
          // Animation complete callback
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: 100, // Adjust starting Y position
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: Power3.easeOut,
        delay: 0.5, // Delay image animation after text
      }
    );
  }, []);

  return (
    <>
      <section className="hero" ref={homeRef} id="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-content-inner">
                <h2 className="about-title">
                  <div className="hero-content-line">
                    <span ref={(el) => textLinesRef.current.push(el)}>
                      Hi, I'm Colette,
                    </span>
                  </div>
                  <div className="hero-content-line">
                    <span ref={(el) => textLinesRef.current.push(el)}>
                      a creative front-end developer
                    </span>
                  </div>
                  <div className="hero-content-line">
                    <span ref={(el) => textLinesRef.current.push(el)}>
                      with a strong background in design.
                    </span>
                  </div>
                </h2>
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
          {/* <p className="about-text">
            My expertise lies in merging creative vision with robust technical
            skills to produce visually striking and immersive digital
            experiences.
          </p> */}
        </div>
      </section>
      <Projects />
    </>
  );
};

export default Home;
