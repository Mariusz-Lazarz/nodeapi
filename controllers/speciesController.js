const { Film } = require("../models/filmModel.js");
const generalController = require("./generalController.js");

const getAllSpecies = generalController.getAll(undefined, "species");
const getOneSpecie = generalController.getOne(undefined, "species");

module.exports = {
  getAllSpecies,
  getOneSpecie,
};