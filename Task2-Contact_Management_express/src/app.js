const express = require("express");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Server is Working!");
});

app.use("/api/contacts", contactRoutes);


module.exports = app;