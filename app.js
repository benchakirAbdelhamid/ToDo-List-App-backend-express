const express = require("express");
const mongoose = require("mongoose");
const tasksRoutes = require('./routes/taskRoutes')
const app = express();
require("dotenv").config();

// Middleware
app.use(express.json());

// Db conection
async function startServer() {
  try {
    await mongoose.connect(process.env.DATABASE, {
      dbName: "ToDo-List",
      //   useNewUrlParser: true,
      //   useUnifiedTopology : true
    });
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    return;
  }

  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`App is running on port ${port}`));
}

startServer();



app.use("/",tasksRoutes)
