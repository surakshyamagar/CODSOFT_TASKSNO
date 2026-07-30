const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Server is Working!");
});

// STUDENT ROUTE
app.use("/students", studentRoutes);

// COURSE ROUTE
app.use("/courses", courseRoutes);

// ENROLLMENT ROUTE
app.use("/enrollments", enrollmentRoutes);

module.exports = app;