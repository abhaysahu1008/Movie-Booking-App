const env = require("dotenv");
env.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  console.log("api hitted!");

  return res.json({
    success: true,
  });
});

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully!");
    console.log(`Server started on ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
