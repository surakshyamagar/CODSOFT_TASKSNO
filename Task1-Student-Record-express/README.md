# TASK 1: Student Record Management API (Backend)

1. Overview
    The Student Record Management API is a RESTful backend application developed using Node.js, Express.js, Prisma ORM, and PostgreSQL. It allows users to manage student records, course information, and student enrollments through REST APIs.

    This project was completed as Task 1 for the CodSoft Backend Development Internship.

2. Features
    I. Student Management
        Create a student
        Get all students
        Get a student by ID
        Update student details
        Delete a student
        Search students by name
        Filter students by age
        Sort students by name or age
        Pagination support

    II. Course Management
        Create a course
        Get all courses
        Get a course by ID
        Update course details
        Delete a course

    III. Enrollment Management
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
    Thunder Client (API Testing)

4. Project Structure
    Task1-Student-Record-API
    │
    ├── prisma/
    │   ├── schema.prisma
    │   └── migrations/
    │
    ├── src/
    │   ├── config/
    │   │   └── db.js
    │   ├── controllers/
    │   ├── routes/
    │   ├── app.js
    │   └── server.js
    │
    ├── .env
    ├── package.json
    └── README.md

5. Installation
    1. Clone the repository
        git clone <repository-url>
    2. Open the project
        cd Task1-Student-Record-API
    3. Install dependencies
        npm install
    4. Configure the .env file
        DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/studentdb"
        PORT=5000
    5. Generate Prisma Client
        npx prisma generate
    6. Run database migrations
        npx prisma migrate dev
    7. Start the server
        Development mode:
            npm run dev

        Production mode:
            npm start

        The server will run at:
            http://localhost:5000


6. API Endpoints
    I.  Student
        Method	    Endpoint	    Description
        POST	    /students	    Create Student
        GET	        /students	    Get All Students
        GET	        /students/:id	Get Student By ID
        PUT	        /students/:id	Update Student
        DELETE	    /students/:id	Delete Student

        Student Query Parameters
        Query	            Example
        Search	            /students?search=renu
        Filter	            /students?age=22
        Sort	            /students?sort=name
        Descending Sort	    /students?sort=age&order=desc
        Pagination	        /students?page=1&limit=5

        GET http://localhost:5000/students
        search by name
        http://localhost:5000/students/name?name=john
        filter by age
        GET http://localhost:5000/students/age?age=20
        sort
        http://localhost:5000/students/sort?sort=name&order=asc
        Pagination
        GET http://localhost:5000/students/page?page=1&limit=5

    II. Course
        Method	        Endpoint
        POST	        /courses
        GET	            /courses
        GET	            /courses/:id
        PUT	            /courses/:id
        DELETE	        /courses/:id

    III. Enrollment
        Method	        Endpoint
        POST	        /enrollments
        GET	            /enrollments
        GET	            /enrollments/:id
        DELETE	        /enrollments/:id

7. Database Models
    > Student
    > Course
    > Enrollment

8. Relationships:
    One Student can have many Enrollments.
    One Course can have many Enrollments.
    Each Enrollment belongs to one Student and one Course.

9. HTTP Status Codes
    200 – Success
    201 – Resource Created
    404 – Resource Not Found
    500 – Internal Server Error

