const Movie = require("../models/movie.model");

const createMovie = async (req, res) => {
  try {
    const movieData = await Movie.create(req.body);
    res.status(201).json({
      success: true,
      error: {},
      data: movieData,
      message: "Movie created successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: { error },
      message: "Something went wrong!",
    });
  }
};

module.exports = { createMovie };
