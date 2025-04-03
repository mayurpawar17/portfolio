import React from "react";
import "../assets/styles/pcard.css";
import shoes_bg from "../assets/images/shoes bg.jpg";
import { Icon } from "@iconify/react";

const Card = ({ projectTitle, projectDescription }) => {
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
            <span className="author-name">Installation & Usage Guide</span>
            {/* <span className="publish-date">Jun 20, 2019</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
