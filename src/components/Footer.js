import React from "react";
import "../styles/Footer.css";
import icon from "../images/github.png";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/clo2202"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={icon} height="40px" width="40px" alt="github" />
      </a>
      <a
        href="https://github.com/clo2202"
        target="_blank"
        rel="noopener noreferrer"
      >
        clo2202
      </a>
    </footer>
  );
};

export default Footer;
