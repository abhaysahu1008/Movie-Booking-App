const Theatre = require("../models/theatre.model");

const createTheatre = async (data) => {
  const theatre = await Theatre.create(data);
  return theatre;
};

module.exports = {
  createTheatre,
};
