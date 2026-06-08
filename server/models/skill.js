const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a skill name"],
      trim: true,
      unique: true,
    },
    category: {
      type: String,
      enum: ["Frontend", "Backend", "Database", "Tools", "Languages"],
      required: true,
    },
    proficiency: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
      default: "Intermediate",
    },
  },
  {timestamps: true},
);

module.exports = mongoose.model("Skill", skillSchema);
