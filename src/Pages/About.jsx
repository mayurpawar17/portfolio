import React from "react";
import "../assets/styles/about.css";
import Profile from "../assets/images/profile1.png";

const About = () => {
  const name = "Mayur Pawar";
  return (
    <>
      <div className="about-container">
        <h1 className="aboutTitle">About me</h1>
        <div className="about-content">
          <img src={Profile} alt="mayur profile" className="about-photo" />
          <div className="about-text">
            <h1 className="about-title">Hi there!</h1>
            <p className="about-description">
              I'm {name}, a passionate developer specializing in Android and web
              development. I love creating user-friendly applications and
              exploring new technologies. Let's build something amazing
              together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
