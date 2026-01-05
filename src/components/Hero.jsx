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
              <Icon
                icon="mdi:github"
                width="24"
                height="24"
                style={{ color: "#a3a3a3" }}
              />
            </span>
            <span>
              {" "}
              <Icon
                icon="mdi:linkedin"
                width="24"
                height="24"
                style={{ color: "#a3a3a3" }}
              />
            </span>
            <span>
              {" "}
              <Icon
                icon="mdi:email"
                width="24"
                height="24"
                style={{ color: "#a3a3a3" }}
              />
            </span>
          </div>
        </div>

        <img src={profileImg} alt="profile" className="hero-avatar" />
      </div>
    </section>
  );
}
