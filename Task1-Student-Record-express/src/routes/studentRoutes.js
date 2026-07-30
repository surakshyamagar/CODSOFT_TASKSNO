
const express = require("express");
const { createStudent, getStudents, getStudentByName, updateStudent, getStudentByAge, getStudentById, sortStudents, getStudentsWithPagination, deleteStudentById } = require("../controllers/studentController");
const { validateStudent } = require("../middleware/validation");

const router = express.Router();

router.post("/", validateStudent, createStudent);

// GET
// GET /student
router.get("/", getStudents);
// GET by Name
router.get("/name", getStudentByName);
// GET / FILTER by Age
router.get("/age", getStudentByAge)

// SORT
router.get("/sort", sortStudents);

// Pagination
router.get("/page", getStudentsWithPagination);

// GET by ID
router.get("/:id", getStudentById)

// UPDATE / PUT
router.put("/:id", validateStudent, updateStudent)

// DELETE
router.delete("/:id", deleteStudentById);

module.exports = router;