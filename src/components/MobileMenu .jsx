import React, { useState } from "react";
import "../assets/styles/Menu.css"; // Import your CSS file for styling


const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-menu-container">
      {/* Hamburger Icon */}
      <div
        className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>

      {/* Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
        {/* Close Button */}
        <button className="close-btn" onClick={toggleMenu}>
          &times; {/* "X" symbol */}
        </button>

        {/* Menu Items */}
        <ul className="menu-items">
          <li>
            <a href="/" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="/services" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="/contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
