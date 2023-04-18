const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

// insert db collection name after  mongodb.net/{CollectionName}?retryWrites
const url = `mongodb+srv://${db_username}:${db_password}@cluster0.qc6qwfl.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

module.exports = db;
