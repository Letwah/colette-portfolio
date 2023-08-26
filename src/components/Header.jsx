import React from "react";
import "./header/header.css";
const Header = () => {
  return (
    <>
      <nav>
        <h1 className="logo">Colette Smith</h1>
        <ul className="navigation">
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#cv" className="nav-link">
              CV
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#work" className="nav-link">
              work
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <button className="burger-menu" id="burger-menu">
          <ion-icon className="bars" name="menu-outline"></ion-icon>
        </button>
      </nav>
    </>
  );
};

export default Header;
