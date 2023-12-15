const generalController = require("./generalController.js");

const getAllStarships = generalController.getAll("starships");
const getOneStarship = generalController.getOne("starships");

module.exports = {
  getAllStarships,
  getOneStarship,
};
