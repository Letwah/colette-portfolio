import React from "react";
import { Link } from "react-router-dom";
import "./header/header.css";
const Header = () => {
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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <button className="burger-menu" id="burger-menu">
          <ion-icon className="bars" name="menu-outline"></ion-icon>
        </button>
      </nav>
    </>
  );
};

export default Header;
