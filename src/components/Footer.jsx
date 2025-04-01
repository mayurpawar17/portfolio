import React from "react";
import "../assets/styles/footer.css";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
 <Icon icon="mynaui:letter-m-square" width="48" height="48"  style={{color: "#000"}}/>

      </div>

      <div className="footer-newsletter">
        <span>Stay in touch</span>
      </div>
      <div className="footer-links">
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
      </div>
    </footer>
  );
};

export default Footer;
