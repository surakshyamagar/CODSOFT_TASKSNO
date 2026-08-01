## Task 1: Student Record Management API (Backend)
1. Overview

The Student Record Management API is a RESTful backend application developed using Node.js, Express.js, Prisma ORM, and PostgreSQL. It allows users to manage student records, course information, and student enrollments through RESTful APIs.

This project was completed as Task 1 for the CodSoft Backend Development Internship.

2. Features
Student Management
Create a student
Get all students
Get a student by ID
Update student details
Delete a student
Search students by name
Filter students by age
Sort students by name or age
Pagination support
Course Management
Create a course
Get all courses
Get a course by ID
Update course details
Delete a course
Enrollment Management
Enroll a student in a course
Get all enrollments
Get an enrollment by ID
Delete an enrollment

3. Technologies Used
Node.js
Express.js
PostgreSQL
Prisma ORM
dotenv
Nodemon
Postman (API Testing)

4. Project Structure
Task1-Student-Record-express
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
├── package-lock.json
└── README.md

# Installation
1. Clone the repository
git clone https://github.com/surakshyamagar/CODSOFT_TASKSNO.git

2. Move into the project
cd CODSOFT_TASKSNO/Task1-Student-Record-express

3. Install dependencies
npm install

4. Configure the environment variables
Create a .env file in the project root.

DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/studentdb"
PORT=5000

5. Generate Prisma Client
npx prisma generate

6. Run Database Migrations
npx prisma migrate dev

7. Start the Server
Development
npm run dev
Production
npm start
The server will start on
http://localhost:5000

# API Endpoints
Student APIs
Method	Endpoint	Description
POST	/students	Create Student
GET	/students	Get All Students
GET	/students/:id	Get Student By ID
PUT	/students/:id	Update Student
DELETE	/students/:id	Delete Student

Student Search
GET /students/name?name=john
Filter by Age
GET /students/age?age=20
Sort Students
GET /students/sort?sort=name&order=asc

Descending

GET /students/sort?sort=age&order=desc
Pagination
GET /students/page?page=1&limit=5
Course APIs
Method	Endpoint	Description
POST	/courses	Create Course
GET	/courses	Get All Courses
GET	/courses/:id	Get Course By ID
PUT	/courses/:id	Update Course
DELETE	/courses/:id	Delete Course
Enrollment APIs
Method	Endpoint	Description
POST	/enrollments	Create Enrollment
GET	/enrollments	Get All Enrollments
GET	/enrollments/:id	Get Enrollment By ID
DELETE	/enrollments/:id	Delete Enrollment

# Database Models
Student
Course
Enrollment

# Relationships
One Student can have many Enrollments.
One Course can have many Enrollments.
Each Enrollment belongs to one Student.
Each Enrollment belongs to one Course.

# HTTP Status Codes
Status Code	Meaning
200	OK
201	Created
400	Bad Request
404	Not Found
500	Internal Server Error

# API Testing

All API endpoints were tested successfully using Postman.

The exported Postman Collection is included in the repository for easy API testing.

# Learning Outcomes

Through this project, I learned:

REST API development
Express.js routing
CRUD operations
Prisma ORM
PostgreSQL integration
Database relationships
Query parameters
Searching
Filtering
Sorting
Pagination
API testing using Postman
Backend project structure