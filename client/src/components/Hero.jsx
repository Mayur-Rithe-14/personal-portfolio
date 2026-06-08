// client/src/components/Hero.jsx
import {useState, useEffect} from "react";
import profileImg from "../assets/profile.jpg";
import {FiCode, FiBox, FiCpu, FiTrendingUp} from "react-icons/fi";
import {FaGithub, FaLinkedin, FaInstagram, FaEnvelope} from "react-icons/fa";
import "./Hero.css";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div
            className="hero-greeting"
            style={{transform: `translateY(${scrollY * 0.5}px)`}}
          >
            <span className="greeting-icon">👋</span>
            <span className="greeting-text">Hello, I'm</span>
          </div>

          <h1 className="hero-title">
            <span className="name">Mayur Rithe</span>
            <span className="role gradient-text">
              MERN Stack Developer | React & Node.js Developer
            </span>
          </h1>

          <p className="hero-subtitle">
            Passionate MERN Stack Developer currently building full-stack web
            applications using React, Node.js, Express, and MongoDB. Actively
            learning modern web development and solving real-world problems
            through projects.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <FiCode />
              </div>
              <div className="stat-content">
                <div className="stat-number">3</div>
                <div className="stat-label">Full-Stack Projects Built</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <FiBox />
              </div>
              <div className="stat-content">
                <div className="stat-number">MERN</div>
                <div className="stat-label">Primary Tech Stack</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <FiCpu />
              </div>
              <div className="stat-content">
                <div className="stat-number">Problem Solver</div>
                <div className="stat-label">Building Real-World Projects</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <FiTrendingUp />
              </div>
              <div className="stat-content">
                <div className="stat-number">Growing</div>
                <div className="stat-label">Consistent Learning</div>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <button
              className="button-primary"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </button>
            <button
              className="button-secondary"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Let's connect</span>
            <div className="socials-icons">
              <a
                href="https://github.com/Mayur-Rithe-14"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mayur-rithe/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:mayurrithe2004@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-wrapper">
            <div className="image-glow"></div>
            <img src={profileImg} alt="Your Profile" className="hero-image" />
          </div>
        </div>
      </div>

      <div className="hero-gradient-blur"></div>
    </section>
  );
}
