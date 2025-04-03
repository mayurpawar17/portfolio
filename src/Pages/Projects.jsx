import React from "react";
import "../assets/styles/project.css";
import ProjectCard from "../components/ProjectCard";
import Card from '../components/Card'

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
    {
      id: 3,
      name: "Project 3",
      description: "A brief description of the project.",
      link: "#",
    },
    {
      id: 4,
      name: "Project 4",
      description: "A brief description of the project.",
      link: "#",
    },
  ];

  return (
    <>
      <div className="projectContainer">
        <h1 className="projectTitle">Projects</h1>

        <div className="projectCardContainer">
          {/* {projects.map((project) => (
            <ProjectCard key={project.id} projectTitle={project.name} />
          ))} */}

          {
            projects.map((project)=>(
              <Card key={project.id} projectTitle={project.name} projectDescription={project.description}/>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Projects;
