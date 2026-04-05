import "../styles/Timeline.css";

import kapilItSolutions from "../assets/kapil_it_solutions.png";

// const experienceData = [

//   {
//  logo: kapilItSolutions,
//     company: "Kapil IT Solutions",
//     role: "Flutter Developer Intern",
//     period: "Hyderabad | Jun. 2025 – Nov. 2025",
//   },

// ];

const experienceData = [
  {
    company: "Kapil IT Solutions",
    logo: kapilItSolutions,
    totalDuration: "11 mos",
    experiences: [
      {
        role: "Software Engineer",
        type: "Full-time",
        period: "Dec 2025 – Present · 5 mos",
      },
      {
        role: "Flutter Developer Intern",
        type: "Internship",
        period: "Jun 2025 – Nov 2025 · 6 mos",
      },
    ],
  },
  // {
  //   company: "YouTube",
  //   logo: kapilItSolutions,
  //   totalDuration: "8 yrs 4 mos",
  //   experiences: [
  //     {
  //       role: "Content Creator",
  //       type: "Self-employed",
  //       period: "Jan 2018 – Present",
  //     },
  //   ],
  // },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h3>Experience</h3>

      {experienceData.map((company, index) => (
        <div key={index} className="company-block">
          {/* Company Header */}
          <div className="company-header">
            <div className="company-left">
              <img src={company.logo} alt="" className="company-logo" />

              <div className="company-name">{company.company}</div>
            </div>

            <div className="company-duration">{company.totalDuration}</div>
          </div>

          {/* Timeline */}
          <div className="role-timeline">
            {company.experiences.map((exp, i) => (
              <div key={i} className="role-item">
                {/* Left line + dot */}
                <div className="experience-timeline-left">
                  <div className="dot" />
                  {i !== company.experiences.length - 1 && (
                    <div className="line" />
                  )}
                </div>

                {/* Right content */}
                <div className="role-content">
                  <div className="role-title">{exp.role}</div>
                  <div className="role-type">{exp.type}</div>
                  <div className="role-period">{exp.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

// const Experience = () => {
//   return (
//     <section className="timeline-section">
//       <h3>Internship & Work Experience</h3>

//       {experienceData.map((exp, index) => (
//         <div className="timeline-item" key={index}>
//           <div className="timeline-left">
//             <img
//               src={exp.logo}
//               alt={exp.company}
//               className="timeline-logo"
//             />

//             <div>
//               <div className="timeline-title">{exp.company}</div>
//               <div className="timeline-subtitle">{exp.role}</div>
//             </div>
//           </div>

//           <div className="timeline-right">{exp.period}</div>
//         </div>
//       ))}
//     </section>
//   );
// };

export default Experience;
