const { Film } = require("../models/filmModel.js");
const generalController = require("./generalController.js");

const getAllVehicles = generalController.getAll(undefined, "vehicles");
const getOneVehicle = generalController.getOne(undefined, "vehicles");

module.exports = {
  getAllVehicles,
  getOneVehicle,
};
