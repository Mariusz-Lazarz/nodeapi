const generalController = require("./generalController.js");

const getAllSpecies = generalController.getAll("species");
const getOneSpecie = generalController.getOne("species");

module.exports = {
  getAllSpecies,
  getOneSpecie,
};
