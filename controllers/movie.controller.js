const Movie = require("../models/movie.model");
const {
  ErrorResponseBody,
  SuccessResponseBody,
} = require("../utils/responseBody");

const movieServices = require("../services/movie.service");

const createMovie = async (req, res) => {
  try {
    const movieData = await movieServices.createMovie(req.body);
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

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await movieServices.getMovieById(id);

    ((SuccessResponseBody.data = movie),
      res.status(200).json(SuccessResponseBody));
  } catch (error) {
    ErrorResponseBody.err = error;
    console.log(error);
    res.status(500).json(ErrorResponseBody);
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await movieServices.deleteMovie(id);

    ((SuccessResponseBody.data = response),
      (SuccessResponseBody.message = "Successfully deleted the movie!"),
      res.status(200).json(SuccessResponseBody));
  } catch (error) {
    ErrorResponseBody.err = error;
    console.log(error);
    res.status(500).json(ErrorResponseBody);
  }
};

module.exports = { createMovie, getMovieById, deleteMovie };
