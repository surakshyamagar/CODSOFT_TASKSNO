// imports 
const prisma = require("../config/db");

// ✅POST / CREATE
const createStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;

        const student = await prisma.student.create({
            data: {
                name,
                email,
                age,
            },
        });

        // send json response for success
        res.status(201).json({
            message: "Student created successfully",
            data: student,
        })

    } catch (error) {
        // email already exist
         if (error.code === "P2002") {
            return res.status(400).json({
                message: "Email already exists",
            });
        }

        console.error(error);
        res.status(500).json({
            message: "Internal Server Error!"
        });
    }
};

// ✅ GET
const getStudents = async (req, res) => {
    try {
        const students = await prisma.student.findMany();

        res.status(200).json({
            message: "STudent fetched succesfully",
            data: students,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        })
    }
};

// GET/ SEARCH students by NAME
const getStudentByName = async (req, res) => {
    try{
        const { name } = req.query;
        const students = await prisma.student.findMany({
            where: {
                name: {
                    contains: name,
                    mode: "insensitive",
                },
            },
        });
        res.status(200).json({
            message: "Students Found",
            data: students,
        });
        
    }catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error!",
        });
    }
};

// Filter by AgeFilter by Age
const getStudentByAge = async (req, res) => {
    try{
        const age = parseInt(req.query.age);

        const students = await prisma.student.findMany({
            where: {
                age: age,
            },
        });

        res.status(200).json({
            message: "Students found",
            data: students,
        });

    } catch (error) {
         console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

// GET student by ID
const getStudentById = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const student = await prisma.student.findUnique({
            where: {
                id,
            },
        });

        // if not stduent found
        if (!student) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        res.status(200).json({
            message: "Student fetched successfully",
            data: student,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

// Sort Students
 const sortStudents = async (req, res) => {
    try{
        const {sort, order} = req.query;

        const students = await prisma.student.findMany({
            orderBy: {
                [sort]: order === "desc" ? "desc": "asc",
            },
        });
        res.status(200).json({
            message: "Students sorted successfully",
            data: students,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });
    }
 };

//  Pagination
const getStudentsWithPagination = async (req, res) => {
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const skip = (page - 1) * limit;

        // Count total students
        const totalStudents = await prisma.student.count();

         // Get students for current page
        const students = await prisma.student.findMany({
            skip,
            take: limit,
        });
        res.status(200).json({
            message: "Students fetched successfully",
            currentPage: page,
            pageSize: limit,
            totalStudents,
            totalPages: Math.ceil(totalStudents / limit),
            data: students,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

// UPDATE / PUT by ID
const updateStudent = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const {name, email, age} = req.body;

         // Check if student exists
        const existingStudent = await prisma.student.findUnique({
            where: {id},
        });

        if (!existingStudent) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        // Update Students
        const updateStudent = await prisma.student.update({
            where: { id },
            data: {
                name,
                email,
                age,
            },
        });

        res.status(200).json({
            message: "Student updated successfully",
            data: updateStudent,
        });

    } catch (error) {
          if (error.code === "P2002") {
            return res.status(400).json({
                message: "Email already exists",
            });
        }

        console.error(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

// DELETE
const deleteStudentById = async (req, res) => {
    try{
        // Get student ID from URL
        const id = parseInt(req.params.id);

        const existingStudent = await prisma.student.findUnique({
            where: {
                id,
            },
        });

        if (!existingStudent) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        // Delete student
        await prisma.student.delete({
            where: {id},
        });

        res.status(200).json({
            message: "Student deleted successfully",
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

// export createStudent function
module.exports = {
    createStudent,
    getStudents,
    getStudentByName,
    getStudentById,
    updateStudent,
    getStudentByAge,
    sortStudents,
    getStudentsWithPagination,
    deleteStudentById
}