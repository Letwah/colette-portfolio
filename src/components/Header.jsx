import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectBurgerOpen, setBurgerOpen } from "../features/appSlice";
import "./header/header.css";
import myCustomBurger from "../../public/assets/images/myCustomBurger.svg";
const Header = () => {
  const burgerOpen = useSelector(selectBurgerOpen);
  const dispatch = useDispatch();

  const toggleBurgerMenu = () => {
    dispatch(setBurgerOpen());
  };

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/home">
            <h1>Colette Smith</h1>
          </Link>
        </div>
        <div>
          <ul className="navigation">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="burger-menu-container">
          <button
            className="burger-menu"
            id="burger-menu"
            onClick={toggleBurgerMenu}
          >
            <img
              src={myCustomBurger}
              alt="Burger Menu Icon"
              className="custom-burger-icon"
            />
          </button>
          {burgerOpen && (
            <div className="burger-menu-content">
              <Link to="/about">About</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
