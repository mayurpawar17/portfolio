import "../styles/Skills.css";

const skills = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "ColossalAI",
  "vLLM",
  "LangGraph",
  "OpenAI API",
  "FastMCP",
  "FastAPI",
  "PostgreSQL",
  "TypeScript",
  "React",
  "Next.js",
  "Docker",
  "Terraform",
  "GitHub Actions",
  "GitLab CI/CD",
  "Grafana",
  "Vercel",
  "Figma",
  "Cursor",
  "C/C++",
  "FFmpeg",
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h3>Skills</h3>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
