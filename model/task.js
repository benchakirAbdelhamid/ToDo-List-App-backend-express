const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  completed: { type: String, default: false },
});

module.exports = mongoose.model("Task", taskSchema);