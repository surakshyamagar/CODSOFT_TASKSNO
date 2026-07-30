const express = require ("express");
const { createEnrollment, getEnrollments, getEnrollmentById, deleteEnrollment } = require("../controllers/enrollmentController");

const router = express.Router();

router.post("/", createEnrollment);
router.get("/", getEnrollments);
router.get("/:id", getEnrollmentById);
router.delete("/:id", deleteEnrollment);

module.exports = router;