const Movie = require("../models/movie.model");

const createMovie = async (data) => {
  const movie = await Movie.create(data);
  return movie;
};

const getMovieById = async (id) => {
  const movie = await Movie.findById(id);
  if (!movie) {
    return {
      err: "no movie found for the corresponding id provided",
      code: 404,
    };
  }
  return movie;
};

const deleteMovie = async (id) => {
  const response = await Movie.findById(id);
  return response;
};

const updateMovie = async (id, req) => {
  const response = await Movie.findByIdAndUpdate(id, req.body);
  return response;
};

const fetchMovies = async (query) => {
  const movies = await Movie.find(query);

  return movies;
};
module.exports = {
  createMovie,
  deleteMovie,
  getMovieById,
  updateMovie,
  fetchMovies,
};
