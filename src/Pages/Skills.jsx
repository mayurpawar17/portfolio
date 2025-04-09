import React from "react";
import { Icon } from "@iconify/react";
import "../assets/styles/skills.css"; // Import CSS file

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <p className="skills-description">
        Here are the technologies I'm proficient in.
      </p>

      <div className="skills-wrapper">
        {/* Frontend */}
        <div className="skills-category">
          <h2>Frontend</h2>
          <div className="skills-icons">
            <a href="https://react.dev/" target="_blank">
              <Icon icon="mdi:react" className="skill-icon" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
            >
              {" "}
              <Icon icon="mdi:language-javascript" className="skill-icon" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
            >
              <Icon icon="mdi:language-html5" className="skill-icon" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
            >
              <Icon icon="mdi:language-css3" className="skill-icon" />
            </a>
            <a href="https://tailwindcss.com/" target="_blank">
              {" "}
              <Icon icon="mdi:tailwind" className="skill-icon" />
            </a>
            <a href="https://getbootstrap.com/" target="_blank">
              <Icon icon="mdi:bootstrap" className="skill-icon" />
            </a>
          </div>
        </div>

        {/* Backend */}
        <div className="skills-category">
          <h2>Backend</h2>
          <div className="skills-icons">
            <a href="https://www.java.com/en/" target="_blank">
              <Icon icon="mdi:language-java" className="skill-icon" />
            </a>
            <a href="https://nodejs.org/en" target="_blank">
              {" "}
              <Icon icon="mdi:nodejs" className="skill-icon" />
            </a>
            <a href="https://expressjs.com/" target="_blank">
              <Icon icon="simple-icons:express" className="skill-icon" />
            </a>
            <a href="https://www.oracle.com/in/database/" target="_blank">
              <Icon icon="simple-icons:oracle" className="skill-icon" />
            </a>
          </div>
        </div>

        {/* Other */}
        <div className="skills-category">
          <h2>Other</h2>
          <div className="skills-icons">
            <a href="https://developer.android.com/" target="_blank">
              {" "}
              <Icon icon="mdi:android-studio" className="skill-icon" />
            </a>
            <a href="https://www.figma.com/" target="_blank">
              {" "}
              <Icon icon="solar:figma-bold-duotone" className="skill-icon" />
            </a>
            <a href="https://adobexdplatform.com/" target="_blank">
              <Icon icon="simple-icons:adobexd" className="skill-icon" />
            </a>
            <a href="https://git-scm.com/" target="_blank">
              {" "}
              <Icon icon="mdi:git" className="skill-icon" />
            </a>
            <a href="https://github.com/" target="_blank">
              {" "}
              <Icon icon="mdi:github" className="skill-icon" />
            </a>
            <a href="https://www.postman.com/" target="_blank">
              {" "}
              <Icon icon="simple-icons:postman" className="skill-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
