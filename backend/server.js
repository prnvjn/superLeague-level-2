//============
//BASIC CONFIG
//============
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt')
const app = express();
require('./api/connection');
const PORT = process.env.PORT
app.set('port', process.env.PORT || 8000);

//==========
//MIDDLEWARE
//==========
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//===========
//ROUTES
//===========
app.get('/', (req, res) => {
     res.redirect('/task')
})

//===========
//CONTROLLERS
//===========
const tripController = require('./api/taskController');
app.use('/tasks', tripController);

const userController = require('./api/userController');
app.use('/', userController);

//============
//START SERVER
//============
app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500; 
    const message = err.message || "Internal Server Error";
    res.status(statusCode).send(message);
});

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🐲 🌟`);
});


// =======================
//  RICKY'S SERVER CODE
// =======================

// const mongoose = require("mongoose");
// const express = require("express");
// const morgan = require("morgan");
// require("dotenv").config();

// const app = express();
// app.use(morgan("dev"));
// app.use(express.json());

// const db_username = process.env.DB_USERNAME;
// const db_password = process.env.DB_PASSWORD;

// // insert db collection name after  mongodb.net/{CollectionName}?retryWrites
// const url = `mongodb+srv://${db_username}:${db_password}@cluster0.qc6qwfl.mongodb.net/?retryWrites=true&w=majority`;

// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// app.listen(8080, () => {
//   console.log("Listening on port 8080");
// });

// module.exports = db;


