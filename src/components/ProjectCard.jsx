import React from "react";
import "../assets/styles/projectCard.css";
import shoes_bg from "../assets/images/shoes bg.jpg";
import "tailwindcss";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";

const ProjectCard = ({ projectTitle }) => {
  return (
    <div className="projectCard">
      <img className="projectImg" src={shoes_bg} alt="Project" />

      <div className="flex justify-around items-center">
        <p className="projectCardTitle">{projectTitle}</p>
        <Button variant="ghost">
          <Icon
           icon="mdi:github"
            width="30"
            height="30"
            style={{ color: "#000" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
