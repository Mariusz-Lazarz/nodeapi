const generalController = require("./generalController.js");

const getAllFilms = generalController.getAll("films");
const getOneFilm = generalController.getOne("films");

module.exports = {
  getAllFilms,
  getOneFilm,
};
