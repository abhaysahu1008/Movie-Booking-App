const theatreController = require("../controllers/theatre.controller");

const routes = (app) => {
  app.post("/mba/api/v1/theatre", theatreController.createTheatreController);
};

module.exports = routes;
