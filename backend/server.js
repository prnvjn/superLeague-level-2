const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const userRoutes = require("./api/userRoutes");
const taskRoutes = require("./api/taskRoutes");

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// prefix added
app.use("/user", userRoutes);
app.use("/task", taskRoutes);

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

const url = `mongodb+srv://${db_username}:${db_password}@cluster0.qc6qwfl.mongodb.net/level2DB?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to database"));

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

module.exports = db;
