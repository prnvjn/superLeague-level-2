const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: String,
    status: String,
    user: {
        type: String,
        ref: 'User',
        required: true
    },
},
{
    timestamps: true,
});

const Task = mongoose.model("Task", TaskSchema)

module.exports = Task