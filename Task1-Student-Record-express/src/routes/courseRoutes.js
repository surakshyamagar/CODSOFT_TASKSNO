// IMPORT
const express = require("express");
const { createCourse, getCourses, getCourseById, updateCourse, deleteCourse } = require("../controllers/courseController");

// router.get ETC
const router = express.Router();

// ROUTES
router.post("/", createCourse);

// GET all
router.get("/", getCourses);
// GET id
router.get("/:id", getCourseById);

// UPDATE ID
router.put("/:id", updateCourse);

// DELETE id
router.delete("/:id", deleteCourse);

// SHARE
module.exports = router; 