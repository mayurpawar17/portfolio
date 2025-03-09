import React from "react";

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
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
