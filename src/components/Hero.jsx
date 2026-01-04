import "../styles/Hero.css";

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
            <span>🐙</span>
            <span>🎓</span>
            <span>in</span>
            <span>X</span>
            <span>✉️</span>
          </div>
        </div>

        <img src={profileImg} alt="profile" className="hero-avatar" />
      </div>
    </section>
  );
}
