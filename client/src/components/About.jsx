// client/src/components/About.jsx

import "./About.css";

export default function About() {
  return (
    <section id="about" className="about" data-aos="fade-right">
      <div className="container">
        <div className="about-header">
          <h2>About Me</h2>
          <p className="section-subtitle">
            Get to know more about me and my journey in web development.
          </p>
        </div>

        <div className="about-content">
          <div className="about-card">
            <h3>Hello, I'm Mayur Rithe 👋</h3>

            <p>
              I’m a Full-Stack Developer who enjoys turning ideas into real,
              working web applications that people can actually use.
            </p>

            <p>
              I work with JavaScript, Node.js, Express.js, MongoDB, HTML, CSS,
              and Bootstrap — and I’m currently sharpening my skills in the MERN
              stack by building real-world projects.
            </p>

            <p>
              So far, I’ve built applications involving authentication systems,
              REST APIs, CRUD operations, database management, and responsive UI
              design. I enjoy solving problems and figuring out how to make
              things work better, faster, and cleaner.
            </p>

            <p>
              Right now, I’m focused on improving as a developer by learning
              modern frontend practices and building more scalable,
              production-ready projects.
            </p>

            <p>
              I’m always open to new opportunities, collaborations, and learning
              experiences that challenge me to grow.
            </p>

            <p>
              Outside of coding, I like listening to music and watching movies —
              simple reset mode 😄
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-box">
              <h4>🎓 &nbsp; Education</h4>
              <p>BCS (Bachelor of Computer Science)</p>
            </div>

            <div className="highlight-box">
              <h4>💼 &nbsp; Experience</h4>
              <p>Full-Stack Developer Intern In Thiranex</p>
            </div>

            <div className="highlight-box">
              <h4>🚀 &nbsp; Focus</h4>
              <p>MERN Stack Development</p>
            </div>

            <div className="highlight-box">
              <h4>📍 &nbsp; Location</h4>
              <p>Chh. Sambhaji Nagar, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
