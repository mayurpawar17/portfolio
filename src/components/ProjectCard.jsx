import "../styles/ProjectCard.css";

const ProjectCard = ({ title, date, desc, image, tags }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-date">{date}</p>
        <p className="project-desc">{desc}</p>

        <div className="project-tags">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`project-tag ${tag === "Website" ? "dark" : ""}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
