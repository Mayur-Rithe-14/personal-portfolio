const express = require("express");
const router = express.Router();
const {getAllSkills, createSkill} = require("../controllers/skillController");

router.get("/", getAllSkills);
router.post("/", createSkill);

module.exports = router;
