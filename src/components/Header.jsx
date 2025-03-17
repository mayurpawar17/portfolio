import React from "react";
import "../assets/styles/header.css";
import "tailwindcss";
import MobileMenu from "./MobileMenu ";

const Header = () => {
  return (
    <header>
      <p className="logo">Mayur.</p>

      <nav>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/skills">Skills</a>
        <a href="/about">About</a>
        <MobileMenu />
        {/* <a href="/contact">Contact</a> */}
      </nav>

      <div className="social-link">
        <a href="https://www.linkedin.com/in/mayurpawar17/">
          <img
            className="linked"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
          />
        </a>

        <a href="https://github.com/mayurpawar17">
          <img
            className="github"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
