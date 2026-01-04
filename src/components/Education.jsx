import "../styles/Timeline.css";

import shahadClg  from  '../assets/shahada_clg.png'
import khaperClg  from  '../assets/khaper_clg.png'

const educationData = [

  {
  logo: shahadClg,
    institute: "P.S.G.V.P. Mandal’s D.N.Patel College of Engineering, Shahada",
    degree: "Bachelor's Degree of Computer Engineering (CGPA : 8.16)",
    period: "2021 – 2024",
  },
  {
  logo: khaperClg,
    institute: "Sant Jaganade Maharaj Shikshan Mandal’s Arts & Commerce Sr. College, Khapar",
    degree: "High School",
    period: "2018 – 2020",
  },
];

const Education = () => {
  return (
    <section className="timeline-section">
      <h3>Education</h3>

      {educationData.map((edu, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-left">
            <img
              src={edu.logo}
              alt={edu.institute}
              className="timeline-logo"
            />

            <div>
              <div className="timeline-title">{edu.institute}</div>
              <div className="timeline-subtitle">{edu.degree}</div>
            </div>
          </div>

          <div className="timeline-right">{edu.period}</div>
        </div>
      ))}
    </section>
  );
};

export default Education;
