import "../styles/ProjectCard.css";

const ProjectCard = ({ title, date, desc, image, tags }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
      </div>
      {/* <img src={image} alt={title} className="project-image" /> */}

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-date">{date}</p>
        <p className="project-desc">{desc}</p>

        <div className="project-tags">
          {tags.map((tag, index) => {
            const isDark =
              tag.name === "Website" ||
              tag.name === "Github" ||
              tag.name === "Play Store";

            return tag.link ? (
              <a
                key={index}
                href={tag.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-tag ${isDark ? "dark" : ""}`}
              >
                {tag.name}
              </a>
            ) : (
              <span
                key={index}
                className={`project-tag ${isDark ? "dark" : ""}`}
              >
                {tag.name}
              </span>
            );
          })}
        </div>

        {/* <div className="project-tags">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`project-tag ${tag === "Website" || tag === "Github" || tag === "Play Store" ? "dark" : ""}`}
            >
              {tag}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
