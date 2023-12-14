const { Film } = require("../models/filmModel.js");

const getAllFilms = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Set default page to 1
    const limit = parseInt(req.query.limit) || 10; // Set page limit to 10
    const skip = (page - 1) * limit; // Calculate number of results to skip

    const total = await Film.countDocuments(); // Count documents
    const films = await Film.find().skip(skip).limit(limit); // Return limited films with skiped number of results

    return res.status(200).json({
      totalResults: total,
      data: films,
    });
  } catch (error) {
    return res.status(404).json({
      status: "Fail",
      message: `Can't find ${req.originalUrl}`,
    });
  }
};

const getOneFilm = async (req, res) => {
  try {
    const film = await Film.findById(req.params.id); // find film per ID
    if (!film) {
      return res.status(404).send("Film not found");
    }

    return res.json(film);
  } catch (error) {
    return res.status(404).json({
      status: "Fail",
      message: `Can't find ${req.originalUrl}`,
    });
  }
};
35,6

module.exports = {
  getAllFilms,
  getOneFilm,
};
