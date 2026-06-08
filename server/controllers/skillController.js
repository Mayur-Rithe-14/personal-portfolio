const Skill = require("../models/skill");

exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({category: 1});
    const groupedSkills = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});

    res.status(200).json({success: true, data: groupedSkills});
  } catch (error) {
    res.status(500).json({success: false, message: error.message});
  }
};

exports.createSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json({success: true, data: skill});
  } catch (error) {
    res.status(400).json({success: false, message: error.message});
  }
};
