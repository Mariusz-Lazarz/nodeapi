const generalController = require("./generalController.js");

const getAllPlanets = generalController.getAll("planets");
const getOnePlanet = generalController.getOne("planets");

module.exports = {
  getAllPlanets,
  getOnePlanet,
};
