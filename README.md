# 🚀 Personal Portfolio Website

A modern full-stack portfolio website built with the MERN stack to showcase my projects, technical skills, and web development journey.

## 🌐 Live Demo

[Live Website](https://personal-portfolio-1-cqic.onrender.com)

## 📖 Overview

This portfolio website serves as a central place to showcase development work, technical skills, and contact information. It features a responsive user interface, dynamic project management with a horizontal slider, skills categorization, and a backend API powered by Node.js, Express, and MongoDB.

The site includes real-time email notifications for contact form submissions and a modern, engaging UI/UX design.

## ✨ Features

- ✅ Responsive Design — Mobile, tablet, and desktop optimized
- ✅ Horizontal Projects Slider — Display 2 projects per slide on desktop, 1 on mobile
- ✅ Navigation Controls — Previous/Next buttons and pagination dots
- ✅ Dynamic Projects Section — Showcase projects with descriptions and tech stack
- ✅ Skills Showcase — Categorized technologies with visual icons
- ✅ Contact Form — Send messages directly with email notifications
- ✅ MongoDB Integration — Store projects, skills, and contact messages
- ✅ RESTful API — Well-structured backend endpoints
- ✅ Email Notifications — Receive contact form submissions via Resend
- ✅ Image Hover Effects — Interactive image zoom on hover
- ✅ Smooth Animations — Slide transitions and fade-in effects
- ✅ Mobile-First Approach — Works seamlessly on all devices

## 🛠️ Tech Stack

### Frontend

- React.js — UI library
- JavaScript (ES6+) — Modern JavaScript
- CSS3 — Advanced styling
- React Icons — Icon library
- Vite — Build tool and dev server

### Backend

- Node.js — JavaScript runtime
- Express.js — Web framework
- Mongoose — MongoDB ODM

### Database

- MongoDB — NoSQL database
- MongoDB Atlas — Cloud database hosting

### Email Service

- Resend — Email delivery service

### Development Tools

- Git & GitHub — Version control
- VS Code — Code editor
- Postman — API testing

### Deployment

- Render — Frontend and backend hosting

## 📂 Project Structure

```
portfolio-website
│
├── client/
│   ├── public/
│   │   └── images/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Contact.jsx
│   │   │   ├── Contact.css
│   │   │   ├── Projects.jsx
│   │   │   ├── Projects.css
│   │   │   ├── Skills.jsx
│   │   │   └── ...
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── projectController.js
│   │   ├── skillController.js
│   │   └── contactController.js
│   │
│   ├── models/
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   └── Contact.js
│   │
│   ├── routes/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── contact.js
│   │
│   ├── templates/
│   │   └── emailTemplate.js
│   │
│   ├── .env
│   ├── seeder.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (free tier available)
- Resend account (for email notifications)

### Clone the Repository

```bash
git clone https://github.com/Mayur-Rithe-14/personal-portfolio.git
cd personal-portfolio
```

### Install Dependencies

Frontend:

```bash
cd client
npm install
```

Backend:

```bash
cd ../server
npm install
```

### Configure Environment Variables

Create a `.env` file in the `server/` folder:

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/Personal-Portfolio
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-domain.com
EMAIL=your-email@gmail.com
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
```

Create a `.env` file in the `client/` folder:

```env
VITE_API_URL=https://your-backend-url.com
```

### Seed Database (Optional)

Add sample data to MongoDB:

```bash
cd server
node seeder.js
```

### Start Development Servers

Backend:

```bash
cd server
npm start
```

Frontend (in a new terminal):

```bash
cd client
npm run dev
```

Open the app at `http://localhost:5173`.

### Build for Production

```bash
cd client
npm run build
```

## 📡 API Endpoints

### Projects

- `GET /api/projects` — Get all projects
- `POST /api/projects` — Create a new project (admin)
- `PUT /api/projects/:id` — Update a project (admin)
- `DELETE /api/projects/:id` — Delete a project (admin)

### Skills

- `GET /api/skills` — Get all skills
- `POST /api/skills` — Create a new skill (admin)

### Contact

- `POST /api/contact` — Submit contact form
- `GET /api/contact` — Get all messages (admin)

### Health

- `GET /api/health` — Server health check

## 🎨 Key Features Explained

### Horizontal Projects Slider

- Desktop: Displays 2 projects side-by-side per slide
- Tablet: Displays 1 project per slide
- Mobile: Displays 1 project per slide
- Navigation with previous/next buttons and pagination dots
- Smooth slide transitions with animations

### Contact Form with Email

- Real-time validation
- Sends emails via Resend service
- Form data stored in MongoDB
- Success/error notifications
- Email includes sender details for easy response

### Responsive Design

- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px, 1440px
- Optimized for all screen sizes
- Touch-friendly buttons and interactions

## 📸 Screenshots

| Section  | Description                                       |
| -------- | ------------------------------------------------- |
| Home     | Hero section with introduction and call-to-action |
| Projects | Horizontal slider showcasing portfolio projects   |
| Skills   | Categorized tech stack with icons                 |
| Contact  | Form with real-time email notifications           |

## 🔧 Setup Instructions for Resend

1. Visit [Resend.com](https://resend.com)
2. Sign up with GitHub or email
3. Create an API key in the dashboard
4. Copy the API key (format: `re_xxxxxxxxxxxxx`)
5. Add it to your server `.env` as `RESEND_API_KEY`

## 📋 Environment Variables

### Server Variables

| Variable         | Description                  | Example                |
| ---------------- | ---------------------------- | ---------------------- |
| `PORT`           | Server port                  | `5000`                 |
| `MONGODB_URI`    | MongoDB connection string    | `mongodb+srv://...`    |
| `NODE_ENV`       | Environment                  | `production`           |
| `CORS_ORIGIN`    | Allowed frontend domain      | `https://example.com`  |
| `EMAIL`          | Your email for notifications | `your-email@gmail.com` |
| `RESEND_API_KEY` | Resend API key               | `re_xxxxx...`          |

### Client Variables

| Variable       | Description     | Example                   |
| -------------- | --------------- | ------------------------- |
| `VITE_API_URL` | Backend API URL | `https://api.example.com` |

## 🚀 Deployment

### Deploy Frontend (Render)

1. Push code to GitHub
2. Connect repository to Render
3. Set build command: `npm install && npm run build`
4. Set start command: `npm run dev`
5. Add environment variable: `VITE_API_URL`

### Deploy Backend (Render)

1. Create new Web Service on Render
2. Connect GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add all environment variables
6. Deploy

## 🎯 Future Enhancements

- 🌙 Dark/Light theme toggle
- 📄 Resume download feature
- 🔐 Admin dashboard for content management
- 🔍 Project filtering and search
- 📝 Blog section
- ✨ Advanced animations (Framer Motion)
- ⚡ Performance optimization (Image optimization, Code splitting)
- 🤖 SEO optimization
- 📊 Analytics integration
- 💬 Real-time chat support

## 🐛 Troubleshooting

### Email Not Sending

- Verify `RESEND_API_KEY` is correct
- Check email configuration in `contactController.js`
- Ensure backend is running and accessible

### CORS Errors

- Update `CORS_ORIGIN` in server `.env`
- Verify frontend URL matches CORS settings
- Restart backend server

### MongoDB Connection Issues

- Check `MONGODB_URI` is correct
- Ensure IP whitelist includes Render IP
- Verify MongoDB Atlas cluster is active

## 📚 Additional Resources

- MERN Stack Guide
- React Documentation
- Express.js Guide
- MongoDB Documentation
- Resend Documentation
- Render Deployment Guide

## 👨‍💻 Author

Mayur Rithe

- GitHub: [Mayur-Rithe-14](https://github.com/Mayur-Rithe-14)
- Email: mayurrithe2004@gmail.com
- Portfolio: https://personal-portfolio-1-cqic.onrender.com

## ⭐ Support

If you like this project, please consider:

- ⭐ Giving it a star on GitHub
- 🔗 Sharing it with others
- 💬 Providing feedback and suggestions
- 🐛 Reporting issues

## 📄 License

This project is licensed under the MIT License — see the `LICENSE` file for details.

## 🙏 Acknowledgments

- Thanks to the MERN stack community
- MongoDB for the amazing database
- Resend for email service
- Render for hosting
- All contributors and supporters

Happy Coding! 🚀
