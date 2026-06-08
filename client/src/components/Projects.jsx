// client/src/components/Projects.jsx

import {useState, useEffect} from "react";
import {FiExternalLink, FiGithub} from "react-icons/fi";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/projects`,
      );
      const data = await response.json();

      if (data.success) {
        setProjects(data.data || data.projects || []);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>
          Some Things I've Built
          <p className="section-subtitle">
            Here are a few projects I've worked on recently.
          </p>
        </h2>

        {loading ? (
          <div className="loading">Loading projects...</div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project._id || `${project.title}-${index}`}
                className="project-card card"
                style={{animationDelay: `${index * 0.1}s`}}
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
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
