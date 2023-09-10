import React from "react";
import "./footer/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <div>
            <p>&copy; Copyright 2023</p>
          </div>

          <div>
            <p>
              Built by
              <a href="https://linkedIn/colette-smith" target="_blank">
                &nbsp;Colette Smith
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
