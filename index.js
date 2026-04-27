require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Movie = require("./models/movie.model");
const MovieRoutes = require("./routes/movie.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
MovieRoutes(app);

app.get("/home", (req, res) => {
  return res.json({ success: true, message: "Fetched Home" });
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully!");

    app.listen(process.env.PORT, () => {
      console.log(`Server started on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Startup error:", error);
  }
};

startServer();
