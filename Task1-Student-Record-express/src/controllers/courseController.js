const prisma = require("../config/db");

// Create Course
const createCourse = async (req, res) => {
    try {
        const { title, credits } = req.body;

        const course = await prisma.course.create({
            data: {
                title,
                credits,
            },
        });

        res.status(201).json({
            message: "Course created successfully",
            data: course,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

// GET all
const getCourses = async (req, res) => {
    try{
        const courses = await prisma.course.findMany();

        res.status(200).json({
            message: "Courses fetched successfully",
            data: courses,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });

    }
};

// GET course by ID
const getCourseById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const course = await prisma.course.findUnique({
            where: {
                id,
            },
        });

        if (!course) {
            return res.status(404).json({
                message: "Course not found",
            });
        }
        res.status(200).json({
            message: "Course fetched successfully",
            data: course,
        });
    } catch (error) {
       console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });

    }
};

// UPDATE course ID
const updateCourse = async (req, res) => {

    try {

        const id = parseInt(req.params.id);

        const { title, credits } = req.body;

        const existingCourse = await prisma.course.findUnique({
            where: {
                id,
            },
        });

        if (!existingCourse) {
            return res.status(404).json({
                message: "Course not found",
            });
        }

        const updatedCourse = await prisma.course.update({
            where: {
                id,
            },
            data: {
                title,
                credits,
            },
        });

        res.status(200).json({
            message: "Course updated successfully",
            data: updatedCourse,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });

    }

};

// DELETE id
const deleteCourse = async (req, res) => {
    try{
        const id = parseInt(req.params.id);

        const existingCourse = await prisma.course.findUnique({
            where: {
                id,
            },
        });

        if (!existingCourse) {
            return res.status(404).json({
                message: "Course not found",
            });
        }

        await prisma.course.delete({
            where: {
                id,
            },
        });

        res.status(200).json({
            message: "Course deleted successfully",
        }); 

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
};