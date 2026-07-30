taskkill /F /IM node.exe (You may have an old server already running on port 5000 from another project.)

# Library Management System API

A RESTful Library Management System built using **Node.js**, **Express.js**, **Prisma ORM**, and **PostgreSQL**.

This project was developed as **Task 4** for the **CodSoft Backend Development Internship**.

---

# Features

- Author CRUD
- Book CRUD
- Member CRUD
- Issue Books
- Return Books
- Track Book Availability
- Borrowing History
- Prevent Duplicate Book Issues
- Search Books
- Filter Books
- Paginate Books
- Search Members
- Filter Members
- Paginate Members
- Input Validation using Zod
- Proper Error Handling
- Prisma ORM with PostgreSQL

### Bonus Features

- Overdue Book Detection
- Overdue Days Calculation
- Late Fee Calculation

---

# Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Zod
- CORS

---

# Project Structure

```
src
│
├── config
│   └── db.js
│
├── controllers
│   ├── authorController.js
│   ├── bookController.js
│   ├── memberController.js
│   └── issuedBookController.js
│
├── middleware
│   ├── authorValidation.js
│   ├── bookValidation.js
│   └── memberValidation.js
│
├── routes
│   ├── authorRoutes.js
│   ├── bookRoutes.js
│   ├── memberRoutes.js
│   └── issuedBookRoutes.js
│
├── app.js
└── server.js

prisma
│
├── schema.prisma
└── migrations
```

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Go to the project

```bash
cd Library_Management_express
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
DATABASE_URL="postgresql://username:password@localhost:5432/librarydb"
PORT=5000
```

Generate Prisma Client

```bash
npx prisma generate
```

Run database migrations

```bash
npx prisma migrate dev
```

Start the server

```bash
npm run dev
```

---

# Base URL

```
http://localhost:5000
```

---

# Database Models

## Author

- id
- name
- bio
- createdAt

---

## Book

- id
- title
- isbn
- publishedYear
- totalCopies
- availableCopies
- authorId

---

## Member

- id
- name
- email
- phone

---

## Issued Book

- id
- issuedAt
- dueDate
- returnedAt
- status
- memberId
- bookId

---

# API Endpoints

## Authors

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /authors | Create Author |
| GET | /authors | Get All Authors |
| GET | /authors/:id | Get Author By ID |
| PUT | /authors/:id | Update Author |
| DELETE | /authors/:id | Delete Author |

---

## Books

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /books | Create Book |
| GET | /books | Get All Books |
| GET | /books/:id | Get Book By ID |
| PUT | /books/:id | Update Book |
| DELETE | /books/:id | Delete Book |
| GET | /books/search?title=Harry | Search Books |
| GET | /books/filter?authorId=1 | Filter Books |
| GET | /books/paginate?page=1&limit=5 | Pagination |

---

## Members

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /members | Create Member |
| GET | /members | Get All Members |
| GET | /members/:id | Get Member By ID |
| PUT | /members/:id | Update Member |
| DELETE | /members/:id | Delete Member |
| GET | /members/search?search=John | Search Members |
| GET | /members/filter?hasIssuedBooks=true | Filter Members |
| GET | /members/paginate?page=1&limit=5 | Pagination |

---

## Issued Books

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/issued-books | Issue Book |
| GET | /api/issued-books | Get All Issued Books |
| GET | /api/issued-books/:id | Get Issued Book By ID |
| PUT | /api/issued-books/:id/return | Return Book |
| GET | /api/issued-books/overdue | Get Overdue Books |

---

# Business Rules

The system validates the following rules:

- Book must exist before issuing.
- Member must exist before issuing.
- Book must have available copies.
- A member cannot issue the same book twice without returning it first.
- Returning a book automatically increases available copies.
- Deleting a member with existing issue records is not allowed.
- ISBN must contain exactly 13 digits.
- Email must be unique.
- Request data is validated using Zod.

---

# Search

Search books by title

```
GET /books/search?title=Harry
```

Search members

```
GET /members/search?search=John
```

---

# Filter

Books by author

```
GET /books/filter?authorId=1
```

Members with issued books

```
GET /members/filter?hasIssuedBooks=true
```

---

# Pagination

Books

```
GET /books/paginate?page=1&limit=5
```

Members

```
GET /members/paginate?page=1&limit=5
```

---

# Bonus Features

## Overdue Books

```
GET /api/issued-books/overdue
```

Returns:

- overdueDays
- lateFee

# Validation

The project uses **Zod** to validate incoming request data before it reaches the controllers.


# Testing

All endpoints were tested successfully using **Postman**.


