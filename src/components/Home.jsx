import React, { useRef, useEffect, useState } from "react";
import { gsap, Power3 } from "gsap";
import "./home/home.css";
import Projects from "./Projects";

const Home = () => {
  const homeRef = useRef(null);
  const textLinesRef = useRef([]);
  const imageRef = useRef(null);
  const paraRef = useRef(null);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    // Set initial visibility
    gsap.set(homeRef.current, { visibility: "visible" });
    gsap.set(paraRef.current, { visibility: "visible", opacity: 0 });

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
        <div className="container">
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
                    a creative front-end developer
                  </div>
                  <div
                    className="hero-content-line"
                    ref={(el) => textLinesRef.current.push(el)}
                  >
                    with a background in design.
                  </div>
                </h2>
                <p ref={paraRef} className="about-text">
                  merging creative vision with evolving technical skills to
                  create visually immersive digital experiences.
                </p>
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
      <Projects />
    </>
  );
};

export default Home;
