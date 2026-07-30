const prisma = require("../config/db");

const createEnrollment = async (req, res) => {
    try{
        const {studentId, courseId} = req.body;

        // check if student exists
        const student = await prisma.student.findUnique({
            where: {
                id: studentId,
            },
        });

        if (!student){
            return res.status(404).json({
                message: "Student not found",
            });
        }

        // check if course exists
        const course = await prisma.course.findUnique({
            where: {
                id: courseId,
            },
        });

        if (!course){
            return res.status(404).json({
                message: "Course not found",
            });
        }

        // create enrollment roll with strudentId,a nd cousreId
        const enrollment = await prisma.enrollment.create({
            data: {
                studentId,
                courseId,
            },
        });
        res.status(201).json({
            message: "Enrollment created successfully",
            data: enrollment,
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

// GET all Enrollments
const getEnrollments = async (req, res) => {
    try{
        const enrollments = await prisma.enrollment.findMany({
            // include => 
            include: {
                student: true,
                course: true,
            },
        });
        res.status(200).json({

            message: "Enrollments fetched successfully",

            data: enrollments,

        });
    } catch (error) {
        console.error(error);

        res.status(500).json({

            message: "Internal Server Error",

        });
    }
}

// GET enrollment by Id
const getEnrollmentById = async (req, res) => {
    try{
        const id = parseInt(req.params.id);

        const enrollment = await prisma.enrollment.findUnique({
            where: {
                id,
            },
            include: {
                student: true,
                course: true,
            },
        });

        if(!enrollment) {
            return res.status(404).json({

                message: "Enrollment not found",

            });
        }
        res.status(200).json({

            message: "Enrollment fetched successfully",

            data: enrollment,

        });
    } catch (error) {
        console.error(error);

        res.status(500).json({

            message: "Internal Server Error",

        });
    }
};

// DELETE 
const deleteEnrollment = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const enrollment = await prisma.enrollment.findUnique({
            where: {
                id,
            },
        });

        if (!enrollment) {
            return res.status(404).json({

                message: "Enrollment not found",

            });
        }

        // delete
        await prisma.enrollment.delete({
            where: {
                id,
            },
        });
        res.status(200).json({

            message: "Enrollment deleted successfully",

        });
    } catch (error) {
        console.error(error);

        res.status(500).json({

            message: "Internal Server Error",

        });
    }
};

module.exports = {
    createEnrollment,
    getEnrollments,
    getEnrollmentById,
    deleteEnrollment
};