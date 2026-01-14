import "../styles/Hero.css";
import { Icon } from "@iconify/react";
import profileImg from "../assets/porfolio.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Mayur Pawar</h1>
          <p className="hero-sub">मयूर पवार</p>

          <p className="hero-desc">
            Full Stack Developer <br />
            Flutter developer at Kapil IT Solutions
          </p>

          <div className="hero-icons">
            <span>
              {" "}
              <a
                href="https://github.com/mayurpawar17"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Icon icon="mdi:github" width="24" height="24" />
              </a>
            </span>
            <span>
              {" "}
              <a
                href="https://www.linkedin.com/in/mayurpawar17"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Icon icon="mdi:linkedin" width="24" height="24" />
              </a>
            </span>
            <span>
              {" "}
              <a href="mailto:mayurpawar4908@gmail.com"  target="_blank"
                rel="noopener noreferrer">
                {" "}
                <Icon icon="mdi:email" width="24" height="24" />
              </a>
            </span>
          </div>
        </div>

        <img src={profileImg} alt="profile" className="hero-avatar" />
      </div>
    </section>
  );
}
