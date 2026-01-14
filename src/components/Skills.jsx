import "../styles/Skills.css";

import SkillCategoryCard from "./SkillCategoryCard";

export const skillsData = [
  {
    category: "Mobile Development",
    skills: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Dart", icon: "devicon-dart-plain colored" },
      { name: "Android Studio", icon: "devicon-androidstudio-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
      { name: "Supabase", icon: "devicon-supabase-plain colored" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Prisma", icon: "devicon-prisma-original colored" },
      { name: "Mongoose", icon: "devicon-mongodb-plain colored" },
      { name: "Drizzle ORM", icon: "devicon-database-plain" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
    ],
  },
];


const Skills = () => {
  return (
    <section className="skills-section">
      <h3>Skills</h3>

      {/* <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-chip">
            <i className={skill.icon}></i>
            <span>{skill.name}</span>
          </span>
        ))}
      </div> */}

      <div className="skills-grid">
        {skillsData.map((item, index) => (
          <SkillCategoryCard
            key={index}
            category={item.category}
            icon={item.icon}
            skills={item.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
