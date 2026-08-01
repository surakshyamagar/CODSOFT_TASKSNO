1. Run this: "npx nodemon --exec "node src/server.js
2. If you have server.js in the root, run:
npx nodemon --exec "node server.js"

# Contact Management System API (Backend)
1. Overview

The Contact Management System API is a RESTful backend application developed using Node.js, Express.js, Prisma ORM, PostgreSQL, and Zod. It allows users to manage personal and professional contacts through REST APIs.

This project was completed as Task 2 for the CodSoft Backend Development Internship.

2. Features
Create a contact
Get all contacts
Get a contact by ID
Update contact details
Delete a contact
Search contacts by name
Sort contacts by name, email, company
Pagination support
Prevent duplicate email addresses
Validate contact data using Zod
Validate email addresses
Validate phone numbers
Proper error handling
PostgreSQL database integration

3. Technologies Used
Node.js
Express.js
PostgreSQL
Prisma ORM
Zod
CORS
dotenv
Nodemon
Postman (API Testing)

4. Project Structure
Task2-Contact_Management_express
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── middleware/
│   │   └── validation.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md

5. Installation
1. Clone the repository
git clone https://github.com/surakshyamagar/CODSOFT_TASKSNO.git
2. Open the project
cd Task2-Contact_Management_express
3. Install dependencies
npm install
4. Configure the .env file
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/contactdb"
PORT=5000
5. Generate Prisma Client
npx prisma generate
6. Run database migrations
npx prisma migrate dev
7. Start the server

Development Mode

npm run dev

Production Mode

npm start

The server runs at

http://localhost:5000

6. API Endpoints
Contact APIs
Method	Endpoint	Description
POST	/api/contacts	Create Contact
GET	/api/contacts	Get All Contacts
GET	/api/contacts/:id	Get Contact by ID
PUT	/api/contacts/:id	Update Contact
DELETE	/api/contacts/:id	Delete Contact
Search Contact
GET /api/contacts/search?search=renu
Sort Contacts

Ascending

GET /api/contacts/sort?sort=name&order=asc

Descending

GET /api/contacts/sort?sort=name&order=desc

Examples

GET /api/contacts/sort?sort=email&order=asc

GET /api/contacts/sort?sort=company&order=desc

GET /api/contacts/sort?sort=createdAt&order=desc
Pagination
GET /api/contacts/pagination?page=1&limit=5

7. Database Model
Contact
Field	Type
id	Integer
name	String
email	String (Unique)
phone	String
address	String
company	String
createdAt	DateTime
updatedAt	DateTime

8. Validation

The API validates:

Name
Email
Phone Number
Address
Company
Duplicate Email Address

using Zod before saving data into the database.

9. HTTP Status Codes
Status Code	Meaning
200	Success
201	Contact Created
400	Bad Request
404	Contact Not Found
500	Internal Server Error

10. Postman Collection

All API endpoints have been tested using Postman.

The exported Postman Collection is available in the project repository:

Postman/
└── CodSoft.postman_collection.json

11. Learning Outcomes

Through this project, I learned:

Building REST APIs using Express.js
CRUD Operations
PostgreSQL Database
Prisma ORM
Request Validation using Zod
Search Functionality
Sorting
Pagination
Error Handling
Environment Variables
API Testing with Postman
Backend Project Structure