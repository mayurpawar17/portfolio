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
          <Icon icon="mdi:react" className="skill-icon" />
            <Icon icon="mdi:language-javascript" className="skill-icon" />
            <Icon icon="mdi:language-html5" className="skill-icon" />
            <Icon icon="mdi:language-css3" className="skill-icon" />
            <Icon icon="mdi:tailwind" className="skill-icon" />
            <Icon icon="mdi:bootstrap" className="skill-icon" />
            <Icon icon="mdi:code-braces" className="skill-icon" />
          </div>
        </div>

        {/* Backend */}
        <div className="skills-category">
          <h2>Backend</h2>
          <div className="skills-icons">
          <Icon icon="mdi:language-java" className="skill-icon" />
            <Icon icon="mdi:nodejs" className="skill-icon" />
            <Icon icon="simple-icons:express" className="skill-icon" />
            <Icon icon="simple-icons:oracle" className="skill-icon" />
          </div>
        </div>

        {/* Other */}
        <div className="skills-category">
          <h2>Other</h2>
          <div className="skills-icons">
          <Icon icon="mdi:android-studio" className="skill-icon" />
            <Icon icon="solar:figma-bold-duotone" className="skill-icon" />
            <Icon icon="simple-icons:adobexd" className="skill-icon" />
            <Icon icon="mdi:git" className="skill-icon" />
            <Icon icon="mdi:github" className="skill-icon" />
            <Icon icon="simple-icons:postman" className="skill-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
