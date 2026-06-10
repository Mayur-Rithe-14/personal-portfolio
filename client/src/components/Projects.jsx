// client/src/components/Projects.jsx

import {useState, useEffect, useRef} from "react";
import {FiExternalLink, FiGithub} from "react-icons/fi";
import {IoChevronBack, IoChevronForward} from "react-icons/io5";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${API}/api/projects`);
      const data = await response.json();
      setProjects(data.data || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <div className="container">
        <div className="projects-header">
          <h2>
            Some Things <span className="highlight">I've Built</span>
            <p className="section-subtitle">
              Here are a few projects I've worked on recently.
            </p>
          </h2>
        </div>

        {loading ? (
          <div className="loading">Loading projects...</div>
        ) : projects.length > 0 ? (
          <>
            <div className="slider-container" ref={sliderRef}>
              <div className="slider-wrapper">
                {projects.map((project, index) => (
                  <div
                    key={project._id || project.title}
                    className={`slider-item ${
                      index === currentSlide ? "active" : ""
                    }`}
                  >
                    <div
                      className="project-card"
                      data-aos="flip-left"
                      data-aos-delay="200"
                    >
                      <div className="project-image">
                        <img
                          src={project.image || "/images/default.png"}
                          alt={project.title}
                        />
                        <div className="project-overlay">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="overlay-link"
                          >
                            <FiExternalLink />
                          </a>
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="overlay-link"
                            >
                              <FiGithub />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="project-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <div className="project-tech">
                          {project.technologies?.map((tech) => (
                            <span key={tech} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="project-links">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <FiExternalLink /> Live Demo
                          </a>
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link"
                            >
                              <FiGithub /> GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="pagination-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            {/* Navigation controls (moved below pagination dots) */}
            {!loading && projects.length > 0 && (
              <div className="slider-controls slider-controls-bottom">
                <button className="nav-btn prev-btn" onClick={prevSlide}>
                  <IoChevronBack />
                </button>
                <button className="nav-btn next-btn" onClick={nextSlide}>
                  <IoChevronForward />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-projects">No projects found</div>
        )}
      </div>
    </section>
  );
}
