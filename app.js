const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const genres = require("./controllers/genres");
const books = require("./controllers/books");

//Connect to mongoose
mongoose.connect("mongodb://localhost/bookstore");

const db = mongoose.connection;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Please use /api/books/ or /api/genres/");
});

app.use("/api/genres", genres);
app.use("/api/books", books);

app.listen(3000);
console.log("Running on port 3000....");
