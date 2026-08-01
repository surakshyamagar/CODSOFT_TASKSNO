# To-Do List Backend API (Backend)

# 1. Overview

The To-Do List Management API is a RESTful backend application developed using Python, Django, Django REST Framework (DRF), SQLite, and JWT Authentication.

It allows users to securely manage their personal tasks with full CRUD operations, search, filtering, categories, priorities, due dates, and user-specific task management.

This project was completed as **Task 3** for the **CodSoft Backend Development Internship**.

---

# Features
- User Registration
- User Login using JWT Authentication
- Create Tasks
- View All Tasks
- View Single Task
- Update Tasks
- Delete Tasks
- Mark Tasks as Pending or Completed
- Search Tasks by Title
- Filter Tasks by Status
- Task Priority Levels
- Due Dates
- User-specific Tasks (Each user can only access their own tasks)
- Proper HTTP Status Codes
- Input Validation

---

# Tech Stack
- Python
- Django
- Django REST Framework (DRF)
- SQLite
- JWT Authentication (Simple JWT)
- Postman

---

# Project Structure

```
Task3-TodoList-Django/
│
├── config/
│   ├── settings.py
│   ├── urls.py
│   └── ...
│
├── tasks/
│   ├── migrations/
│   ├── models.py
│   ├── serializers.py
│   ├── user_serializers.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
│
├── db.sqlite3
├── manage.py
├── requirements.txt
└── README.md
```

---

# Installation

## 1. Clone the repository

```bash
git clone https://github.com/surakshyamagar/CODSOFT_TASKSNO.git
```
## 2. Move into the project

```bash
cd Task3-TodoList-Django
```
## 3. Create Virtual Environment
python -m venv venv 
```
## 4. Activate Virtual Environment

PowerShell

```bash
venv\Scripts\Activate
```

Command Prompt

```bash
venv\Scripts\activate
```

---

## 5. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 6. Apply Database Migrations

```bash
python manage.py makemigrations

python manage.py migrate
```

---

## 7. Run the Server

```bash
python manage.py runserver
```

Server starts at

```
http://127.0.0.1:8000/
```

---

# Required Packages

```bash
pip install django
pip install djangorestframework
pip install djangorestframework-simplejwt
```

---

# Authentication

This project uses **JWT (JSON Web Token)** authentication.

Protected endpoints require:

```
Authorization: Bearer <access_token>
```

---

# User Flow

## Register

```
POST /api/register/
```

Example

```json
{
    "username": "renu",
    "email": "renu@gmail.com",
    "password": "renu123"
}
```

---

## Login

```
POST /api/login/
```

Example

```json
{
    "username": "renu",
    "password": "renu123"
}
```

Response

```json
{
    "refresh": "...",
    "access": "..."
}
```

Copy the **access token**.

---

## Use Token

Add to every protected request

```
Authorization: Bearer your_access_token
```

---

# Task Model

Each task contains

| Field | Type |
|--------|------|
| id | Integer |
| user | Foreign Key |
| title | String |
| description | Text |
| status | Pending / Completed |
| priority | Low / Medium / High |
| category | String |
| due_date | Date |
| created_at | DateTime |

---

# API Endpoints
## Register

| Method | Endpoint |
|---------|----------|
| POST | /api/register/ |

---

## Login

| Method | Endpoint |
|---------|----------|
| POST | /api/login/ |

---

## Refresh Token

| Method | Endpoint |
|---------|----------|
| POST | /api/token/refresh/ |

---

## Get All Tasks

| Method | Endpoint |
|---------|----------|
| GET | /api/tasks/ |

Authentication Required

---

## Create Task

| Method | Endpoint |
|---------|----------|
| POST | /api/tasks/ |

Authentication Required

Example

```json
{
    "title": "Learn Django",
    "description": "Complete DRF project",
    "status": "Pending",
    "priority": "High",
    "category": "Study",
    "due_date": "2026-07-20"
}
```

---

## Get Single Task

| Method | Endpoint |
|---------|----------|
| GET | /api/tasks/1/ |

Authentication Required

---

## Update Task

| Method | Endpoint |
|---------|----------|
| PUT | /api/tasks/1/ |

Authentication Required

---

## Delete Task

| Method | Endpoint |
|---------|----------|
| DELETE | /api/tasks/1/ |

Authentication Required

---

# Search

Search tasks by title

```
GET /api/tasks/?search=django
```

---

# Filter

Pending tasks

```
GET /api/tasks/?status=Pending
```

Completed tasks

```
GET /api/tasks/?status=Completed
```

---

# User Isolation

Each task belongs to one user.

Users can:

- Create their own tasks
- View only their own tasks
- Update only their own tasks
- Delete only their own tasks

They cannot access another user's tasks.

---

# HTTP Status Codes

| Status Code | Meaning |
|-------------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |

# Testing

All APIs were tested using **Postman**.

Tested Features

- User Registration
- User Login
- JWT Authentication
- Create Task
- Retrieve Tasks
- Retrieve Single Task
- Update Task
- Delete Task
- Search
- Filter
- User Isolation

---

# Bonus Features Implemented

- JWT Authentication
- User Registration
- User Login
- Due Dates
- Priority Levels
- User-specific Tasks
- Search
- Filtering

---

# Learning Outcomes

Through this project, I learned:

- Django Project Structure
- Django Models
- Django ORM
- Django REST Framework
- Serializers
- Generic API Views
- JWT Authentication
- CRUD Operations
- Query Parameters
- Search and Filtering
- User Authentication
- Foreign Keys
- API Testing with Postman
- REST API Design

---
 
 Backend Development Internship Project - CodSoft