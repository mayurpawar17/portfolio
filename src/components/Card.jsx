import React from "react";
import "../assets/styles/pcard.css";
import shoes_bg from "../assets/images/shoes bg.jpg";
import { Icon } from "@iconify/react";

const Card = ({ projectTitle, projectDescription, projectLink }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={shoes_bg} alt="Lamp" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{projectTitle}</h2>
        <p className="card-description">{projectDescription}</p>
        <div className="card-footer">
          <Icon icon="mdi:github" width="24" height="24" />
          <div>
            <a href={projectLink} target="_blank">
              <span className="author-name">Installation & Usage Guide</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
