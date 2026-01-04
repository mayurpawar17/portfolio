import "../styles/Timeline.css";

import kapilItSolutions from '../assets/kapil_it_solutions.png'

const experienceData = [

  {
 logo: kapilItSolutions,
    company: "Kapil IT Solutions",
    role: "Flutter Developer Intern",
    period: "Hyderabad | Jun. 2025 – Nov. 2025",
  },
 
];

const Experience = () => {
  return (
    <section className="timeline-section">
      <h3>Internship & Work Experience</h3>

      {experienceData.map((exp, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-left">
            <img
              src={exp.logo}
              alt={exp.company}
              className="timeline-logo"
            />

            <div>
              <div className="timeline-title">{exp.company}</div>
              <div className="timeline-subtitle">{exp.role}</div>
            </div>
          </div>

          <div className="timeline-right">{exp.period}</div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
