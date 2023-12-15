const { Film } = require("../models/filmModel.js");
const generalController = require("./generalController.js");

const getAllPeople = generalController.getAll(undefined, "people");
const getOnePerson = generalController.getOne(undefined, "people");

module.exports = {
  getAllPeople,
  getOnePerson,
};