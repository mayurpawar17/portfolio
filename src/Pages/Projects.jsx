import React from "react";
import "../assets/styles/project.css";
import Card from "../components/Card";


const Projects = () => {


  const projects = [
    {
      id: 1,
      name: "Sneakology",
      description:
        "Sneakology is a sneaker enthusiast’s paradise—a dedicated platform for sneaker lovers to explore, analyze, and stay updated on the latest hype releases, rare kicks, and streetwear culture.",
        image : "https://github.com/mayurpawar17/portfolio/blob/main/src/assets/projectImgs/sneakologBg.jpg?raw=true",
      link: "https://github.com/mayurpawar17/Sneakology",
    },
    {
      id: 2,
      name: "Hospital Management System",
      description:
        "Hospital Management System using Java, JDBC, and PostgreSQL to manage patient registration, doctor appointments, and medical records. Utilized Maven for build automation, designed an optimized database schema, and implemented efficient SQL queries.",
        image : "https://github.com/mayurpawar17/portfolio/blob/main/src/assets/projectImgs/sneakologBg.jpg?raw=true",
      link: "https://github.com/mayurpawar17/Hospital-Management-System-JDBC.git",
    },
    {
      id: 3,
      name: "Project 3",
      description: "A brief description of the project.",
      image : "https://github.com/mayurpawar17/portfolio/blob/main/src/assets/projectImgs/sneakologBg.jpg?raw=true",
      link: "#",
    },
    {
      id: 4,
      name: "Smart Solar Grass Cutter",
      description: "The Smart Solar Grass Cutter is an eco-friendly, solar-powered lawn mower that operates in automatic or manual mode via an Android app. It uses ultrasonic sensors for safe, efficient navigation and obstacle avoidance.",
      image : "https://github.com/mayurpawar17/portfolio/blob/main/src/assets/projectImgs/sneakologBg.jpg?raw=true",
      link: "https://github.com/mayurpawar17/Smart-Solar-Grass-Cutter.git",
    },
  ];

  return (
    <>
      <div className="projectContainer">
        <h1 className="projectTitle">Projects</h1>

        <div className="projectCardContainer">

          {projects.map((project) => (
            <Card
              key={project.id}
              projectTitle={project.name}
              projectDescription={project.description}
              projectImg={project.image}
              projectLink={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
