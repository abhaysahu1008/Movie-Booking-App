const MovieController = require("../controllers/movie.controller");
const movieMiddleware = require("../middlewares/movie.middleware");

const routes = (app) => {
  app.post(
    "/mba/api/v1/movies",
    movieMiddleware.validateMovieCreateRequest,
    MovieController.createMovie,
  );

  app.get("/mba/api/v1/movies/:id", MovieController.getMovieById);

  app.delete("/mba/api/v1/movies/:id", MovieController.deleteMovie);

  app.put("/mba/api/v1/movies/:id", MovieController.updateMovie);

  app.get("/mba/api/v1/movies", MovieController.getMovies);
};

module.exports = routes;
