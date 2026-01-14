import '../styles/SkillCategoryCard.css'

const SkillCategoryCard = ({ category, skills }) => {
  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <h2 className="skill-category">{category}</h2>
      </div>

      <div className="skill-list">
        {skills.map((skill, index) => (
           <span key={index} className="skill-chip">
            <i className={skill.icon}></i>
            <span>{skill.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategoryCard;
