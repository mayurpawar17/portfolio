import "../styles/Skills.css";

const skills = [
  // Mobile
  { name: "Flutter", icon: "devicon-flutter-plain colored" },
  { name: "Dart", icon: "devicon-dart-plain colored" },
  { name: "Android Studio", icon: "devicon-androidstudio-plain colored" },

  // Frontend
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },

  // Backend
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express.js", icon: "devicon-express-original" },

  // Databases
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },

  // ORM / DB Tools
  { name: "Prisma", icon: "devicon-prisma-original colored" },
  { name: "Mongoose", icon: "devicon-mongodb-plain colored" },
  { name: "Drizzle ORM", icon: "devicon-database-plain" }, // no official devicon

  // DevOps / Tools
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "NPM", icon: "devicon-npm-original-wordmark colored" },
  { name: "Nodemon", icon: "devicon-nodejs-plain colored" },

  // Cloud / Backend services
  { name: "Firebase", icon: "devicon-firebase-plain colored" },
  { name: "Supabase", icon: "devicon-supabase-plain colored" },

  // Languages
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
  { name: "JSON", icon: "devicon-json-plain" },

  // API / Design
  { name: "Postman", icon: "devicon-postman-plain colored" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
];


const Skills = () => {
  return (
    <section className="skills-section">
      <h3>Skills</h3>

       <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-chip">
            <i className={skill.icon}></i>
            <span>{skill.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
