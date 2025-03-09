import React from "react";
import "../assets/styles/header.css";

const Header = () => {
  return (
    <header>
      <p className="logo">Mayur.</p>

      <nav>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/skills">Skills</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="social-link">
        <img
          className="linked"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
        />

        <img
          className="github"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        />
      </div>
    </header>
  );
};

export default Header;
