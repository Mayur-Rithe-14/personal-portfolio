const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a project title"],
      trim: true,
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please add a project description"],
    },
    image: {
      type: String,
      default: "/images/default.png",
    },
    category: {
      type: String,
      enum: ["Web Apps", "Mobile Apps", "Full Stack"],
      default: "Web Apps",
    },
    technologies: {
      type: [String],
      required: true,
    },
    liveLink: {
      type: String,
      default: "",
    },
    githubLink: {
      type: String,
      default: "",
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {timestamps: true},
);

module.exports = mongoose.model("Project", projectSchema);
