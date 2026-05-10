const { createTheatre } = require("../services/theatre.service");

const createTheatreController = async (req, res) => {
  try {
    const theatreData = req.body;

    const createdTheatre = await createTheatre(theatreData);

    return res.status(201).json({
      message: "Theatre created successfully",
      error: null,
      success: true,
      data: createdTheatre,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Cannot process the request",
      error: error.message,
      success: false,
      data: null,
    });
  }
};

module.exports = {
  createTheatreController,
};
