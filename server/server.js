// server/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer"); 
const connectDB = require("./config/db");

connectDB();

// ✅ ADD THIS DEBUGGING SECTION
const testEmailConfig = async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.verify();
    console.log("✅ Email configuration verified successfully!");
  } catch (error) {
    console.error("❌ Email configuration failed:", error.message);
  }
};

testEmailConfig();

const app = express();
app.set("trust proxy", 1);

// Middleware
const allowedOrigins = ["http://localhost:5173", process.env.CORS_ORIGIN];

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://personal-portfolio-1-cqic.onrender.com",
    ],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use("/api/projects", require("./routes/projects"));
app.use("/api/skills", require("./routes/skills"));
app.use("/api/contact", require("./routes/contact"));

// Health check
app.get("/api/health", (req, res) => {
  res.json({status: "Server is running"});
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message,
  });
});

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
