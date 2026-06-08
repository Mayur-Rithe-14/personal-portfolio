const Project = require("../models/project");

exports.getAllProjects = async (req, res) => {
  try {
    const {category} = req.query;
    let query = {};
    if (category) query.category = category;

    const projects = await Project.find(query).sort({createdAt: -1});
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getFeaturedProjects = async (req, res) => {
  try {
    const projects = await Project.find({featured: true}).limit(3);
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({success: false, message: error.message});
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }
    res.status(200).json({success: true, data: project});
  } catch (error) {
    res.status(500).json({success: false, message: error.message});
  }
};

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({success: true, data: project});
  } catch (error) {
    res.status(400).json({success: false, message: error.message});
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }
    res.status(200).json({success: true, data: project});
  } catch (error) {
    res.status(400).json({success: false, message: error.message});
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({success: false, message: error.message});
  }
};
