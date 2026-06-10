// client/src/components/Skills.jsx
import {useState, useEffect} from "react";
import {FaTools} from "react-icons/fa";
import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaBootstrap,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiC,
  SiCplusplus,
  SiPhp,
  SiMongoose,
  SiJsonwebtokens,
} from "react-icons/si";

export default function Skills() {
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/skills`,
      );
      const data = await response.json();
      if (data.success) {
        setSkills(data.data);
      }
    } catch (error) {
      console.error("Error fetching skills:", error);
      // Fallback data
      setSkills({
        Frontend: [
          {name: "React"},
          {name: "Tailwind CSS"},
          {name: "JavaScript"},
        ],
        Backend: [{name: "Node.js"}, {name: "Express"}, {name: "MongoDB"}],
        Tools: [{name: "Git"}, {name: "VS Code"}, {name: "Figma"}],
      });
    } finally {
      setLoading(false);
    }
  };

  const skillIcons = {
    HTML: <FaHtml5 color="#E34F26" />,
    CSS: <FaCss3Alt color="#1572B6" />,
    JavaScript: <FaJs color="#F7DF1E" />,
    React: <FaReact color="#61DAFB" />,
    "Tailwind CSS": <SiTailwindcss color="#38BDF8" />,
    Bootstrap: <FaBootstrap color="#7952B3" />,

    "Node.js": <FaNodeJs color="#3C873A" />,
    "Express.js": <SiExpress color="#000000" />,
    "REST API": <SiExpress color="#000000" />,
    "JWT Authentication": <SiJsonwebtokens color="#D63AFF" />,

    MongoDB: <SiMongodb color="#4DB33D" />,
    Mongoose: <SiMongoose color="#880000" />,
    SQL: <SiMysql color="#00758F" />,

    Git: <FaGitAlt color="#F1502F" />,
    GitHub: <FaGithub color="#181717" />,
    Postman: <SiPostman color="#FF6C37" />,

    C: <SiC color="#A8B9CC" />,
    "C++": <SiCplusplus color="#00599C" />,
    Python: <FaPython color="#3776AB" />,
    Java: <FaJava color="#007396" />,
    PHP: <SiPhp color="#777BB4" />,

    default: <FaCode color="#888" />,
  };

  return (
    <section id="skills" className="skills" data-aos="fade-left">
      <div className="container">
        <h2>
          Technologies I Work With
          <p className="section-subtitle">
            Here are the technologies I've been working with recently.
          </p>
        </h2>

        {loading ? (
          <div className="loading">Loading skills...</div>
        ) : (
          <div className="skills-grid">
            {Object.entries(skills).length > 0 ? (
              Object.entries(skills).map(([category, skillList], index) => (
                <div
                  key={category}
                  className="skill-category"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <h3>{category}</h3>
                  <div
                    className="skill-items"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    {skillList.map((skill) => (
                      <div key={skill._id} className="skill-item">
                        <span className="skill-icon">
                          {skillIcons[skill.name] ? (
                            skillIcons[skill.name]
                          ) : (
                            <FaCode />
                          )}
                        </span>

                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="default-skills">
                <div className="skill-category">
                  <h3>Frontend</h3>
                  <div className="skill-items">
                    {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map(
                      (skill) => (
                        <div key={skill} className="skill-item">
                          <span className="skill-icon">
                            {skillIcons[skill]}
                          </span>
                          <span className="skill-name">{skill}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Backend</h3>
                  <div className="skill-items">
                    {["Node.js", "Express", "MongoDB", "PostgreSQL"].map(
                      (skill) => (
                        <div key={skill} className="skill-item">
                          <span className="skill-icon">
                            {skillIcons[skill]}
                          </span>
                          <span className="skill-name">{skill}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Tools & Others</h3>
                  <div className="skill-items">
                    {["Git", "Figma", "Firebase"].map((skill) => (
                      <div key={skill} className="skill-item">
                        <span className="skill-icon">{skillIcons[skill]}</span>
                        <span className="skill-name">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
