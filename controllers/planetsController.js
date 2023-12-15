const { Film } = require("../models/filmModel.js");
const generalController = require("./generalController.js");

const getAllPlanets = generalController.getAll(undefined, "planets");
const getOnePlanet = generalController.getOne(undefined, "planets");

module.exports = {
  getAllPlanets,
  getOnePlanet,
};
