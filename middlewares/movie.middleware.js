const badRequestResponse = {
  success: false,
  err: "",
  data: {},
  message: "Malformed Request | Bad Request",
};

const validateMovieCreateRequest = (req, res, next) => {
  const { name, description, trailerUrl, casts, releaseDate, director } =
    req.body;

  if (!name) {
    badRequestResponse.err =
      "The name of the movie is no present in the request!";
    return res.status(400).json(badRequestResponse);
  }
  if (!description) {
    badRequestResponse.err =
      "The description of the movie is no present in the request!";
    return res.status(400).json(badRequestResponse);
  }
  if (!casts || casts.length <= 0 || !(casts instanceof Array)) {
    badRequestResponse.err =
      "The casts of the movie is no present in the request!";
    return res.status(400).json(badRequestResponse);
  }

  next();
};

module.exports = {
  validateMovieCreateRequest,
};
