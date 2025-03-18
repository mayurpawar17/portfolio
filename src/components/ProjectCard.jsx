import React from "react";
import "../assets/styles/projectCard.css";
import shoes_bg from "../assets/images/shoes bg.jpg";

// const ProjectCard = () => {
//   return (
//     <div className="projectCard">
//       <img className="projectImg" src={shoes_bg} />

//       <div className="projectTitleBtn">
//         <h2 className="text-lg font-medium">Project title</h2>

//         <button>View</button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


const ProjectCard = () => {
  return (
    <div className="projectCard">
      <img className="projectImg" src={shoes_bg} alt="Project" />

      <div className="projectTitleBtn">
        <h2 className="projectTitle">Project title</h2>
        <button className="viewBtn">View</button>
      </div>
    </div>
  );
};

export default ProjectCard;