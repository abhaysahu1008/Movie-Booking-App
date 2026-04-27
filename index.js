require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Movie = require("./models/movie.model");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  return res.json({ success: true });
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully!");

    app.listen(process.env.PORT, () => {
      console.log(`Server started on ${process.env.PORT}`);
    });

    // test insert
    const movie = await Movie.create({
      name: "Wohooooo",
      description: "Funny Movie",
      casts: ["Abhay Sahu", "Krishna"],
      trailerUrl: "https://youtu.be/CZwUzVuIz58",
      language: "Hindi",
      releaseDate: new Date("2026-04-27"),
      director: "Krishna",
      releaseStatus: "RELEASED",
    });

    console.log(movie);
  } catch (error) {
    console.log("Startup error:", error);
  }
};

startServer();
