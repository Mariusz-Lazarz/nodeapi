const generalController = require("./generalController.js");

const getAllVehicles = generalController.getAll("vehicles");
const getOneVehicle = generalController.getOne("vehicles");

module.exports = {
  getAllVehicles,
  getOneVehicle,
};
