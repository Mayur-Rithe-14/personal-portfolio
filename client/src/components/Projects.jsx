// client/src/components/Projects.jsx

import {useState, useEffect, useRef} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {FiExternalLink, FiGithub} from "react-icons/fi";
import {IoChevronBack, IoChevronForward} from "react-icons/io5";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const sliderRef = useRef(null);
  const projectsPerPage = 4; // 2x2 grid

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
    });

    fetchProjects();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      AOS.refreshHard();
    }, 50);
  }, [currentPage]);

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

  // Get current page projects
  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <div className="container">
        {/* Centered Header with Top-Right Navigation */}
        <div className="projects-header">
          <h2>
            Some Things <span className="highlight">I've Built</span>
            <p className="section-subtitle">
              Here are a few projects I've worked on recently.
            </p>
          </h2>

          {/* Navigation Controls - Top Right */}
          {!loading && projects.length > 0 && (
            <div className="slider-controls">
              <button
                className="nav-btn prev-btn"
                onClick={prevPage}
                disabled={currentPage === 0}
              >
                <IoChevronBack />
              </button>
              <button
                className="nav-btn next-btn"
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
              >
                <IoChevronForward />
              </button>
            </div>
          )}
        </div>

        {loading ? (
          <div className="loading">Loading projects...</div>
        ) : projects.length > 0 ? (
          <>
            <div className="slider-container" ref={sliderRef}>
              <div className="slider-wrapper">
                {currentProjects.map((project, index) => (
                  <div
                    key={`${currentPage}-${project._id || project.title}`}
                    className="slider-item"
                    data-aos="zoom-in-up"
                    data-aos-duration="700"
                    data-aos-easing="ease-out-cubic"
                    data-aos-delay={index * 120}
                  >
                    <div className="project-card">
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
                        <div>
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>

                          <div className="project-tech">
                            {project.technologies?.slice(0, 4).map((tech) => (
                              <span key={tech} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="project-links">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <FiExternalLink /> Live
                          </a>
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link"
                            >
                              <FiGithub /> Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots - Bottom Center */}
            {totalPages > 1 && (
              <div className="pagination-dots">
                {Array.from({length: totalPages}).map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentPage ? "active" : ""}`}
                    onClick={() => goToPage(index)}
                  />
                ))}
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
