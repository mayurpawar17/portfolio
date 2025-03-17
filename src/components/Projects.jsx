import React from "react";
import '../assets/styles/project.css'
import ProjectCard from "./ProjectCard";


const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "A brief description of the project.",
      link: "#",
    },
    {
      id: 2,
      name: "Project 2",
      description: "A brief description of the project.",
      link: "#",
    },
  ];

  return (
   <>
    <div className="main">
      <h1 className="text-3xl font-bold projectTitle">Projects</h1>

      <div className="projectCardContainer">
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>

      </div>
    </div>
   </>
  );
};

export default Projects;
