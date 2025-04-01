import React from "react";
import "../assets/styles/projectCard.css";
import shoes_bg from "../assets/images/shoes bg.jpg";
import "tailwindcss";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";

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

      {/* <div className="projectTitleBtn">
        <h2 className="projectTitle">Project title</h2>
       <Button variant='outline'>View</Button>
      </div> */}

      <div className="flex justify-around items-center">
        <p className="projectCardTitle">Project Title</p>
        <Button variant="ghost">
          <Icon
            icon="hugeicons:view"
            width="24"
            height="24"
            style={{ color: "#000" }}
          />
          View{" "}
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
