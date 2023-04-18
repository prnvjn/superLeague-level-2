const User = require("./models/User");
const Task = require("./models/Task");

const removeAllData = async () => {
  await User.deleteMany({});
  await Task.deleteMany({});
};

const seed = async () => {
  await removeAllData();
  const user = new User({
    name: "admin",
    password: "admin",
  });
  const savedUser = await user.save();

  const task = new Task({
    title: "Task#1",
    status: "Incomplete",
    dueDate: new Date("2023-04-30"),
    user: savedUser._id,
  });

  // save the task to the database
  await task.save();
};

module.exports = seed;
