// import React from "react";
// import "../assets/styles/header.css";
import "tailwindcss";
// import MobileMenu from "./MobileMenu ";

// const Header = () => {
//   return (
//     <header>
//       <p className="logo">Mayur.</p>

//       <nav>
//         <a href="/">Home</a>
//         <a href="/projects">Projects</a>
//         <a href="/skills">Skills</a>
//         <a href="/about">About</a>
//         <MobileMenu />
//         {/* <a href="/contact">Contact</a> */}
//       </nav>

//       <div className="social-link">
//         <a href="https://www.linkedin.com/in/mayurpawar17/">
//           <img
//             className="linked"
//             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
//           />
//         </a>

//         <a href="https://github.com/mayurpawar17">
//           <img
//             className="github"
//             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
//           />
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import "../assets/styles/header.css";
import MobileMenu from "../components/MobileMenu ";
import { Icon } from "@iconify/react";

const Header = ({ setLoading }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = () => {
    setLoading(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <Icon icon="mynaui:letter-m-square" width="48" height="48"  style={{color: "#000"}}/>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <a href="/">Home</a>
        <a href="/projects" onClick={handleNavigation}>
          Projects
        </a>
        <a href="/skills">Skills</a>
        <a href="/about">About</a>
      </nav>

      {/* Mobile Menu Toggle Button */}
      {/* <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button> */}

      {/* Mobile Menu */}
      {/* {isMobileMenuOpen && <MobileMenu />} */}

      <MobileMenu />

      {/* Social Links */}
      <div className="social-link">
        <a href="https://www.linkedin.com/in/mayurpawar17/">
          <Icon
            icon="mdi:linkedin"
            width="24"
            height="24"
            style={{ color: "#000" }}
          />
        </a>

        <a href="https://github.com/mayurpawar17">
          <Icon
            icon="mdi:github"
            width="24"
            height="24"
            style={{ color: "#000" }}
          />
        </a>

        <div className="flex cursor-pointer">
          <Icon
            icon="lets-icons:sun-light"
            width="24"
            height="24"
            style={{ color: "#00000" }}
          />
          <span>Light</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
