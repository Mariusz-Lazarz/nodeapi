const generalController = require("./generalController.js");

const getAllPeople = generalController.getAll("people");
const getOnePerson = generalController.getOne("people");

module.exports = {
  getAllPeople,
  getOnePerson,
};
