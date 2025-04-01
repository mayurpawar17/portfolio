import React from "react";
import { Icon } from "@iconify/react";
import '../assets/styles/skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
    <div className="titleSection">
    <h1 className="title">Skills</h1>
      <p className="subtitle">Here are the technologies I'm proficient in.</p>

    </div>
      
      
      <div className="skills-grid">
        <div className="skills-section">
          <h2 className="section-title">Frontend</h2>
          <ul>
            <li><Icon icon="simple-icons:react" /> React</li>
            <li><Icon icon="simple-icons:angular" /> Angular</li>
            <li><Icon icon="file-icons:vue" width="512" height="512" style={{color: "#000"}} /> Vue.js</li>
            <li><Icon icon="simple-icons:tailwindcss" /> Tailwind CSS</li>
          </ul>
        </div>
        
        <div className="skills-section">
          <h2 className="section-title">Backend</h2>
          <ul>
            <li><Icon icon="cib:node-js" width="32" height="32"  style={{color: "#000"}} /> Node.js</li>
            <li><Icon icon="simple-icons:python" /> Python</li>
            <li><Icon icon="simple-icons:rust" /> Rust</li>
            <li><Icon icon="simple-icons:postgresql" /> PostgreSQL</li>
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="section-title">Other</h2>
          <ul>
            <li><Icon icon="simple-icons:git" /> Git</li>
            <li><Icon icon="simple-icons:docker" /> Docker</li>
            <li><Icon icon="simple-icons:kubernetes" /> Kubernetes</li>
            <li><Icon icon="simple-icons:figma" /> Figma</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;