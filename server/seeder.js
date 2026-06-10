require("dotenv").config();
const mongoose = require("mongoose");

const Project = require("./models/project");
const Skill = require("./models/skill");

mongoose.connect(process.env.MONGODB_URI);

const projects = [
  {
    title: "Todo App",
    description:
      "A full-stack task management application built with Node.js, Express.js, MongoDB, EJS, Bootstrap, and Passport.js for secure user authentication. This application allows users to securely manage their personal tasks with authentication, task tracking, search functionality, dark/light mode, and a responsive dashboard.",
    image: "/images/todo-app.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Bootstrap",
      "Passport.js",
      "Passport Local Strategy",
      "Express Session",
    ],
    liveLink: "https://todo-app-i3zo.onrender.com",
    githubLink: "https://github.com/Mayur-Rithe-14/todo-app",
  },
  {
    title: "Personal Portfolio",
    description:
      "This portfolio website serves as a central place to showcase development work, technical skills, and contact information. It features a responsive user interface, dynamic project management with a horizontal slider, skills categorization, and a backend API powered by Node.js, Express, and MongoDB. The site includes real-time email notifications for contact form submissions and a modern, engaging UI/UX design.",
    image: "/images/wanderlust.png",
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "CSS3",
      "React Icons",
      "Vite",
      "Node.js",
      "Express.js",
      "Mongoose",
      "MongoDB Atlas",
      "Resend",
      "Git & GitHub",
      "VS Code",
      "Postman",
      "Render ",
      "vercel",
    ],
    liveLink: "https://personal-portfolio-1-cqic.onrender.com",
    githubLink: "https://github.com/Mayur-Rithe-14/personal-portfolio",
  },
  {
    title: "Wanderlust Travel Website",
    description:
      "A full-stack Airbnb-inspired web application that allows users to discover, create, manage, and review accommodation listings. The application provides secure authentication, image uploads, listing management, and a responsive user experience similar to modern vacation rental platforms.",
    image: "/images/wanderlust.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Passport.js",
      "Passport Local Strategy",
      "Express Session",
      "Multer",
      "Cloudinary",
      "Multer Storage Cloudinary",
    ],
    liveLink: "https://wanderlust-by-mayur.onrender.com",
    githubLink: "https://github.com/Mayur-Rithe-14/wanderlust-app",
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
