1. Run this: "npx nodemon --exec "node src/server.js
2. If you have server.js in the root, run:
npx nodemon --exec "node server.js"

# Contact Management System API

A simple RESTful backend application built with **Node.js, Express.js, Prisma ORM, and PostgreSQL**.

This API allows users to manage personal and professional contacts. It provides CRUD operations, search, sorting, pagination, input validation, and duplicate email prevention.

This project was developed as part of the **CodSoft Backend Development Internship**.

---

## Features

- Create a new contact
- Get all contacts
- Get a contact by ID
- Update an existing contact
- Delete a contact
- Search contacts by name
- Sort contacts
- Paginate contact records
- Validate contact data using Zod
- Validate email addresses
- Validate phone numbers
- Prevent duplicate email addresses
- Handle invalid contact IDs
- Handle contact not found errors
- Return meaningful success and error responses
- PostgreSQL database integration
- Prisma ORM for database operations
- Clean and organized project structure

---

## Technologies Used

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- Zod
- CORS
- dotenv
- Nodemon

---

## Why These Technologies Were Used

### Node.js

Node.js is used as the JavaScript runtime for running the backend application.

### Express.js

Express.js is used to build the REST API and handle HTTP requests and routes.

### Prisma

Prisma is used as the ORM (Object-Relational Mapper) to communicate with the PostgreSQL database.

It makes database operations easier using JavaScript.

### PostgreSQL

PostgreSQL is used as the relational database for storing contact information.

### Zod

Zod is used to validate incoming contact data before saving it to the database.

It validates:

- Name
- Email
- Phone number
- Address
- Company

### dotenv

dotenv is used to load environment variables such as the database connection URL.

### CORS

CORS allows the backend API to accept requests from different frontend applications or domains.

### Nodemon

Nodemon automatically restarts the server when code changes are detected during development.

---

## Contact Data Model

Each contact contains the following information:

| Field | Type | Description |
|---|---|---|
| id | Integer | Unique contact ID |
| name | String | Contact's name |
| email | String | Contact's email address |
| phone | String | Contact's phone number |
| address | String | Contact's address |
| company | String | Contact's company |
| createdAt | DateTime | Contact creation date |
| updatedAt | DateTime | Last update date |

The email field is unique to prevent duplicate contacts with the same email address.

---

## Project Structure

```text
Contact_Management_express/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── contactController.js
│   │
│   ├── middleware/
│   │   └── validation.js
│   │
│   ├── routes/
│   │   └── contactRoutes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md


