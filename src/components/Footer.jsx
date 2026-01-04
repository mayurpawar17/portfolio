import "../styles/Footer.css";
import { Icon } from "@iconify/react";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Column 1 */}
        <div className="footer-col">
          <h4>Quick Navigation</h4>
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Education</li>
            <li>Experience</li>
            <li>Skills</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Connect</h4>
          <div className="social-grid">
            <span>
              {" "}
              <Icon
                icon="mdi:github"
                width="24"
                height="24"
                style={{ color: "#000" }}
              />
            </span>

            <span>
              {" "}
              <Icon
                icon="mdi:linkedin"
                width="24"
                height="24"
                style={{ color: "#000" }}
              />
            </span>

            <span>
              {" "}
              <Icon
                icon="mdi:instagram"
                width="24"
                height="24"
                style={{ color: "#000" }}
              />
            </span>
          </div>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>Template</li>
            <li>Download CV</li>
            {/* <li>QR code</li> */}
            <li>Business card</li>
          </ul>
        </div>

        {/* Column 4 */}
        {/* <div className="footer-col">
          <h4>Discover</h4>
          <ul>
            <li>Friends</li>
            <li>HPC-AI Lab</li>
            <li>iCyPhy</li>
            <li>NJU-CSE-Flyers</li>
            <li>HPC-AI Tech</li>
          </ul>
        </div> */}

        {/* Column 5 */}
        {/* <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>Singapore</li>
            <li>Support</li>
          </ul>
        </div> */}
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div>
          © {currentYear} Mayur Pawar · All rights reserved
          {/* <br />
          Last updated: 2025.12 */}
        </div>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Terms & Disclaimer</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
