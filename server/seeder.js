require("dotenv").config();
const mongoose = require("mongoose");

const Project = require("./models/project");
const Skill = require("./models/skill");

mongoose.connect(process.env.MONGODB_URI);

const projects = [
  {
    title: "Todo App",
    description:
      "Task management application with secure Passport.js authentication allowing users to track and manage personal tasks. Includes dark/light mode, search, and responsive design.",
    image: "/images/todo-app.png",
    technologies: ["Node.js", "Express", "MongoDB", "EJS"],
    liveLink: "https://todo-app-i3zo.onrender.com",
    githubLink: "https://github.com/Mayur-Rithe-14/todo-app",
  },

  {
    title: "Personal Portfolio",
    description:
      "Responsive portfolio showcasing development work, skills, and contact info with dynamic project management. Features Node.js, Express, MongoDB backend with real-time email notifications.",
    image: "/images/personal-portfolio.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://personal-portfolio-1-cqic.onrender.com",
    githubLink: "https://github.com/Mayur-Rithe-14/personal-portfolio",
  },

  {
    title: "Wanderlust Travel Website",
    description:
      "Airbnb-inspired platform allowing users to discover, create, and manage accommodation listings with secure authentication. Includes image uploads and responsive user experience.",
    image: "/images/wanderlust.png",
    technologies: ["Node.js", "Express", "MongoDB", "EJS"],
    liveLink: "https://wanderlust-by-mayur.onrender.com",
    githubLink: "https://github.com/Mayur-Rithe-14/wanderlust-app",
  },

  {
    title: "E-Commerce Website",
    description:
      "A full-stack MERN e-commerce platform with secure user authentication, product browsing, shopping cart, order management, and an intuitive, responsive shopping experience.",
    image: "/images/e-mart.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://e-commerce-website-lnms.onrender.com",
    githubLink: "https://github.com/Mayur-Rithe-14/e-commerce-website",
  },

  {
    title: "Taskflow",
    description:
      "Task management platform with JWT authentication and analytics. Includes dark mode, search, filtering, and responsive design.",
    image: "/images/taskflow.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://task-management-webapp-0lsu.onrender.com",
    githubLink: "https://github.com/Mayur-Rithe-14/task-management-webapp",
  },

  {
    title: "Blogify – Blogging Platform",
    description:
      "A modern full-stack blogging platform where users can register, publish articles, upload images, manage profiles, comment on posts, and discover content through search.",
    image: "/images/blogify.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://blog-website-git-main-mayur-rithe-s-projects.vercel.app",
    githubLink: "https://github.com/Mayur-Rithe-14/blog-website",
  },
];

const skills = [
  {name: "HTML", category: "Frontend", proficiency: "Expert"},
  {name: "CSS", category: "Frontend", proficiency: "Advanced"},
  {name: "JavaScript", category: "Frontend", proficiency: "Advanced"},
  {name: "React", category: "Frontend", proficiency: "Advanced"},
  {name: "Tailwind CSS", category: "Frontend", proficiency: "Intermediate"},
  {name: "Bootstrap", category: "Frontend", proficiency: "Intermediate"},

  {name: "Node.js", category: "Backend", proficiency: "Advanced"},
  {name: "Express.js", category: "Backend", proficiency: "Advanced"},
  {name: "REST API", category: "Backend", proficiency: "Advanced"},
  {
    name: "JWT Authentication",
    category: "Backend",
    proficiency: "Intermediate",
  },

  {name: "MongoDB", category: "Database", proficiency: "Advanced"},
  {name: "Mongoose", category: "Database", proficiency: "Advanced"},
  {name: "SQL", category: "Database", proficiency: "Advanced"},

  {name: "Git", category: "Tools", proficiency: "Advanced"},
  {name: "GitHub", category: "Tools", proficiency: "Advanced"},
  {name: "Postman", category: "Tools", proficiency: "Intermediate"},
  {name: "VS Code", category: "Tools", proficiency: "Expert"},
  {name: "Render", category: "Tools", proficiency: "Expert"},
  {name: "Vercel", category: "Tools", proficiency: "Intermediate"},

  {name: "C", category: "Languages", proficiency: "Intermediate"},
  {name: "C++", category: "Languages", proficiency: "Intermediate"},
  {name: "Python", category: "Languages", proficiency: "Intermediate"},
  {name: "Java", category: "Languages", proficiency: "Intermediate"},
  {name: "PHP", category: "Languages", proficiency: "Intermediate"},
];

async function seedData() {
  await Project.deleteMany();
  await Skill.deleteMany();

  await Project.insertMany(projects);
  await Skill.insertMany(skills);

  console.log("Data Seeded");
  process.exit();
}

seedData();
