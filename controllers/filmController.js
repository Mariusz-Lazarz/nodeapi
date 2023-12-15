const { Film } = require("../models/filmModel.js");
const generalController = require("./generalController.js");

const getAllFilms = generalController.getAll(undefined, "films");
const getOneFilm = generalController.getOne(undefined, "films");

module.exports = {
  getAllFilms,
  getOneFilm,
};
