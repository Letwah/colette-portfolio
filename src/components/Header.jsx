import React from "react";
import { Link } from "react-router-dom";
import "./header/header.css";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <button className="burger-menu" id="burger-menu" onClick={toggleMenu}>
          <ion-icon className="bars" name="menu-outline"></ion-icon>
        </button>
        {isMenuOpen && (
          <div className="burger-menu-content">
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
