import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectBurgerOpen, setBurgerOpen } from "../features/appSlice";
import "./header/header.css";

const Header = () => {
  const burgerOpen = useSelector(selectBurgerOpen);
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // This effect runs once after the component mounts

  const toggleBurgerMenu = () => {
    dispatch(setBurgerOpen(!burgerOpen));
    setMobileMenuOpen(!mobileMenuOpen); // Toggle mobile menu state
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <h1>Colette Smith</h1>
        </Link>
      </div>
      {windowWidth > 768 || (!burgerOpen && windowWidth > 768) ? (
        <div className="navigation">
          <ul>
            {/* <Link className="title" to="/">
              Colette Smith | Developer and Designer
            </Link> */}

            {/* <li>
              <Link to="/portfolio">Portfolio</Link>
            </li> */}
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      ) : null}
      <div className="burger-menu-container">
        <button
          className={`burger-menu ${burgerOpen ? "cross" : ""}`}
          id="burger-menu"
          onClick={toggleBurgerMenu}
        >
          <div className={`line ${!burgerOpen ? "cross" : ""}`}></div>
          <div className={`line ${!burgerOpen ? "cross" : ""}`}></div>
          <div className={`line ${!burgerOpen ? "cross" : ""}`}></div>
        </button>

        {mobileMenuOpen && (
          <div className="burger-menu-content">
            <div className="topNavItem">
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/portfolio">Portfolio</Link>
            </div>
            <div>
              <Link to="/projects">Projects</Link>
            </div>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
