const Movie = require("../models/movie.model");
const {
  ErrorResponseBody,
  SuccessResponseBody,
} = require("../utils/responseBody");

const movieServices = require("../services/movie.service");

const createMovie = async (req, res) => {
  try {
    const movieData = await movieServices.createMovie(req.body);
    SuccessResponseBody.message = "Movie created successfully!";
    SuccessResponseBody.data = movieData;

    res.status(201).json(SuccessResponseBody);
  } catch (error) {
    console.log(error);
    res.status(500).json(ErrorResponseBody);
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

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await movieServices.updateMovie(id, req);

    ((SuccessResponseBody.data = response),
      (SuccessResponseBody.message = "Successfully updated the movie!"),
      res.status(200).json(SuccessResponseBody));
  } catch (error) {
    ErrorResponseBody.err = error;
    console.log(error);
    res.status(500).json(ErrorResponseBody);
  }
};

const getMovies = async (req, res) => {
  try {
    const movies = await movieServices.fetchMovies(req.query);

    if (movies.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No movies found",
      });
    }

    return res.status(200).json({
      success: true,
      data: movies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  createMovie,
  getMovieById,
  deleteMovie,
  updateMovie,
  getMovies,
};
