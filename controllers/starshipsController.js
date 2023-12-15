const { Film } = require("../models/filmModel.js");
const generalController = require("./generalController.js");

const getAllStarships = generalController.getAll(undefined, "starships");
const getOneStarship = generalController.getOne(undefined, "starships");

module.exports = {
  getAllStarships,
  getOneStarship,
};